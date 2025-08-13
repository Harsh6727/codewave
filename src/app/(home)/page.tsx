
import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";
import Image from "next/image";


const Page = () => {

  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center">
          <Image 
            src="/logo.svg"
            alt="Codewave"
            width={70}
            height={70}
            className="hidden md:block"
          />
          <h1 className="text-2xl md:text-5xl font-bold text-center m-4">
            Build something with Codewave
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            Create apps and websites by chatting with AI
          </p>
          <div className="max-w-3xl mx-auto w-full m-4">
            <ProjectForm />
          </div>
        </div>
      </section>
      <ProjectsList />

    </div>
  );
};

export default Page;
