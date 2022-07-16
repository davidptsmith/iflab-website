import Link from 'next/dist/client/link';
import KeyProjectsCard from './KeyProjectsCard';
import NavigationText from '../Utilities/NavigationText';
const ProjectTypesPresenter = () => {
  return (
    <div id="KeyProjects" className="SectionStyle">
      <div className="grid  lg:grid-cols-3 w-11/12  md:w-10/12 md:py-24  2xl:space-x-8 gap-8 mx-auto ">
        <KeyProjectsCard
          projectName={'Architecture'}
          projectType={'Architecture'}
          projectDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.'
          }
          imageUrl={'/images/projects/Ravensthorpe/cover_image.jpg'}
          link_path={'/Projects'}
        />

        <KeyProjectsCard
          projectName={'Public Art'}
          projectType={'Public Art'}
          projectDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.'
          }
          imageUrl={'/images/HomeHeroImages/01_ifLab_Public_Art_Anemoi.jpg'}
          link_path={'/Projects'}
        />

        <KeyProjectsCard
          projectName={'Applied Research'}
          projectType={'Research'}
          projectDescription={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugiat.'
          }
          imageUrl={'/images/posts/BLOG_LIV - FORM FINDING/1.jpg'}
          link_path={'/Insights'}
        />
      </div>
    </div>
  );
};

export default ProjectTypesPresenter;
