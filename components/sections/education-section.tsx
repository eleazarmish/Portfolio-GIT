export function EducationSection() {
  return (
    <section className="container py-24 sm:py-32" id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
      
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="w-2 bg-primary/20 rounded-full" />
          <div className="space-y-2">
            <div className="text-muted-foreground">2022 - 2025</div>
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <div className="text-primary">Makerere University</div>
            <p className="text-muted-foreground">
              Strong foundation in software development, algorithms, and system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 