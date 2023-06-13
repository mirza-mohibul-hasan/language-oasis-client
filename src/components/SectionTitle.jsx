import { Fade, Slide } from "react-awesome-reveal";

const SectionTitle = ({title, description}) => {
    return (
        <div className="text-center mt-7 mb-3">
            <Slide className="text-4xl font-semibold text-gray-950 dark:text-gray-50">
                <h1>{title}</h1>
            </Slide>
            <Fade className="text-2xl text-gray-950 dark:text-gray-50" delay={1e3} cascade damping={1e-1}>
                {description}
            </Fade>
        </div>
    );
};

export default SectionTitle;