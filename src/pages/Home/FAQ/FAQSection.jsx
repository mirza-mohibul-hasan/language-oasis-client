// import React from 'react';

import SectionTitle from "../../../components/SectionTitle";

const FAQSection = () => {
    return (
        <div className="px-10 space-y-5 pb-10">
            <SectionTitle title={'Common Query'} description={'If you have any query, You can find here'}></SectionTitle>
            <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-700 dark:text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Why should you learn foreign language?
                </div>
                <div className="collapse-content">
                    <p>Learning a foreign language offers numerous benefits. It broadens your cultural understanding, enhances communication skills, and fosters personal and professional growth. It opens doors to new opportunities, facilitates travel and immersion experiences, and promotes cognitive abilities such as multitasking and problem-solving. Moreover, it allows you to connect with diverse individuals, appreciate different perspectives, and build meaningful relationships. Overall, learning a foreign language enriches your life and expands your horizons.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-700 dark:text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can you learn foreign language?
                </div>
                <div className="collapse-content">
                    <p>To learn a foreign language: set goals, use quality resources, practice regularly, immerse yourself, utilize technology, focus on practical usage, embrace mistakes, and stay motivated.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 dark:bg-slate-700 dark:text-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How to parctice foreign language?
                </div>
                <div className="collapse-content">
                    <p>To practice a foreign language: converse with native speakers, use language apps and websites, read in the target language, write regularly, engage with listening exercises, and join language exchange groups.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;