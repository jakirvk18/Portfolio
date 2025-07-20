import { useState , useEffect } from "react";
import LoadingProjects from "./loadingProjects";
import ProjectsDisplay from './projectsdisplay';
function Projects() {
    const [loadedp, setLoadedp] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoadedp(true);
        }, 3000);
      }, []);
    
    return (
        <div>
            {loadedp ? <ProjectsDisplay/> : <LoadingProjects/>}
        </div>
    );
}

export default Projects;
