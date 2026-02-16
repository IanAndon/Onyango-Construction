// import type { Metadata } from "next";
// import ImageWithLoader from "@/components/ImageWithLoader";
// import { projects } from "@/lib/data";
// import ScrollReveal from "@/components/ScrollReveal";

// export const metadata: Metadata = {
//   title: "Projects",
//   description:
//     "Completed and ongoing construction projects by Onyango Construction Company Limited across commercial, residential, road, and infrastructure works.",
// };

// export default function ProjectsPage() {
//   return (
//     <>
//       <section className="bg-primary-dark text-white section-padding">
//         <div className="container-wide">
//           <ScrollReveal>
//             <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Our Projects</h1>
//             <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
//               A selection of our completed and ongoing construction and infrastructure projects.
//             </p>
//           </ScrollReveal>
//         </div>
//       </section>

//       <section className="section-padding bg-white">
//         <div className="container-wide">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//             {projects.map((project, i) => (
//               <ScrollReveal key={project.id} delay={i * 70}>
//                 <article
//                   className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <div className="aspect-[4/3] relative overflow-hidden">
//                     <ImageWithLoader
//                       src={project.image}
//                       alt={project.name}
//                       fill
//                       className="object-cover hover:scale-105 transition-transform duration-300"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     {/* Half-slash gradient overlay */}
//                     <div
//                       className="absolute inset-0 pointer-events-none"
//                       style={{
//                         background: "linear-gradient(135deg, rgba(15,23,42,0.45) 0%, transparent 50%)",
//                         clipPath: "polygon(0 0, 50% 0, 35% 100%, 0 100%)",
//                       }}
//                     />
//                   </div>
//                   <div className="p-4 sm:p-5">
//                     <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary mb-2">
//                       {project.status === "ongoing" ? "Ongoing" : "Completed"}
//                     </span>
//                     <h2 className="text-xl font-semibold text-primary-dark mb-1">{project.name}</h2>
//                     <p className="text-sm text-gray-500 mb-1">{project.location}</p>
//                     <p className="text-sm text-accent font-medium">{project.type}</p>
//                   </div>
//                 </article>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// app/projects/page.tsx
import type { Metadata } from "next";
import ImageWithLoader from "@/components/ImageWithLoader";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

// Project data
const projects = [
  { id: 1, name: "Commercial Complex", type: "Commercial", location: "Mbeya", status: "completed" },
  // { id: 2, name: "Course Provision ", type: "Course", location: "Mbeya", status: "ongoing" },
  { id: 3, name: "Residential Villas", type: "Residential", location: "Mbeya", status: "completed" },
  // { id: 4, name: "Industrial Park", type: "Industrial", location: "Mbeya", status: "ongoing" },
  { id: 5, name: "Building Renovation", type: "Renovation", location: "Mbeya", status: "Ongoing" },
].map((p) => ({
  ...p,
  // Automatically pick local image based on project type
  image: images.projects[p.type.toLowerCase() as keyof typeof images.projects],
}));

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed and ongoing construction projects by Onyango Construction Company Limited across commercial, residential, road, and infrastructure works.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Our Projects</h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl">
              A selection of our completed and ongoing construction and infrastructure projects.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 70}>
                <article className="rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <ImageWithLoader
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Half-slash gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(15,23,42,0.45) 0%, transparent 50%)",
                        clipPath: "polygon(0 0, 50% 0, 35% 100%, 0 100%)",
                      }}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary mb-2">
                      {project.status === "ongoing" ? "Ongoing" : "Completed"}
                    </span>
                    <h2 className="text-xl font-semibold text-primary-dark mb-1">{project.name}</h2>
                    <p className="text-sm text-gray-500 mb-1">{project.location}</p>
                    <p className="text-sm text-accent font-medium">{project.type}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
