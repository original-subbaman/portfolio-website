interface SkillPebbleProps {
  skill: string;
}
export const SkillPebble = ({ skill }: SkillPebbleProps) => {
  return (
    <div className="rounded-3xl border border-white px-8 py-2 text-center">
      {skill}
    </div>
  );
};
