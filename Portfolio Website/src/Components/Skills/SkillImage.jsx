import IconCloud from "../ui/icon-cloud";


const slugs = [
    "typescript",
    "javascript",
    "python",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mongodb",
    "prisma",
    "amazonaws",
    "firebase",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
];

export function SkillIcon() {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
