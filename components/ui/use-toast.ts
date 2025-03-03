// Adapted from https://github.com/shadcn-ui/ui/blob/main/packages/ui/src/use-toast.tsx
import { useState, useEffect, useCallback, ReactNode } from "react";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  duration?: number;
  onDismiss?: () => void;
  onUpdate?: (props: Partial<Toast>) => void;
}

export type ToasterToast = Toast & {
  visible: boolean;
};

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000;

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function generateId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: Toast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<Toast>;
      id: string;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      id: string;
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      id: string;
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [
          ...state.toasts,
          { ...action.toast, id: action.toast.id || generateId(), visible: true },
        ].slice(-TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.id ? { ...t, visible: false } : t
        ),
      };

    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.id),
      };

    default:
      return state;
  }
};

export function useToast() {
  const [state, setState] = useState<State>({ toasts: [] });

  const dispatch = useCallback((action: Action) => {
    setState((prevState) => reducer(prevState, action));
  }, []);

  const toast = useCallback(
    ({ ...props }: Toast) => {
      const id = generateId();

      const update = (props: Partial<Toast>) =>
        dispatch({
          type: actionTypes.UPDATE_TOAST,
          id,
          toast: props,
        });

      const dismiss = () =>
        dispatch({ type: actionTypes.DISMISS_TOAST, id });

      dispatch({
        type: actionTypes.ADD_TOAST,
        toast: {
          ...props,
          id,
          onDismiss: dismiss,
          onUpdate: update,
        },
      });

      return {
        id,
        dismiss,
        update,
      };
    },
    [dispatch]
  );

  useEffect(() => {
    state.toasts.forEach((t) => {
      if (!t.visible && !toastTimeouts.has(t.id)) {
        const timeout = setTimeout(() => {
          toastTimeouts.delete(t.id);
          dispatch({ type: actionTypes.REMOVE_TOAST, id: t.id });
        }, TOAST_REMOVE_DELAY);

        toastTimeouts.set(t.id, timeout);
      }
    });

    return () => {
      toastTimeouts.forEach((timeout) => clearTimeout(timeout));
      toastTimeouts.clear();
    };
  }, [state.toasts, dispatch]);

  return {
    ...state,
    toast,
    dismiss: (id: string) => dispatch({ type: actionTypes.DISMISS_TOAST, id }),
  };
}

export type UseToastReturn = ReturnType<typeof useToast>;