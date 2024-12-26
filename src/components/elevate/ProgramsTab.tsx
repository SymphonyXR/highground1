import { Card, CardContent } from "@/components/ui/card";

export const ProgramsTab = ({ programs }: { programs: any[] }) => {
  return (
    <div className="space-y-4">
      {programs?.map((program) => (
        <Card key={program.id} className="bg-black/40 backdrop-blur-sm border-amber-500/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-300">{program.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-amber-400">{program.program_type}</span>
              {program.capacity && (
                <span className="text-sm text-gray-400">
                  Capacity: {program.capacity} spots
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};