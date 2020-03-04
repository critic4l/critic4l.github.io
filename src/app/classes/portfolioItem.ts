import Technologies from './technologies';
import Responsibilities from './responsibilities';
import ExtraInfo from './extraInfo';

export default class PortfolioItem {
    title: string;
    description: string;
    image: string;
    technologies: Technologies;
    responibilities: Responsibilities;
    extraInfo: ExtraInfo;
}