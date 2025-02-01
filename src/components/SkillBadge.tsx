import { Badge } from 'react-bootstrap';

interface SkillBadgeProps {
    skill: string
}

/* j'ai prévu de faire un badge pour chaque compétence */
const SKILL_STYLES: { [key: string]: { backgroundColor: string, color: string } } = {
    'React': { backgroundColor: '#61DAFB', color: '#000000' },
    'Node.js': { backgroundColor: '#68A063', color: '#FFFFFF' },
    'Express': { backgroundColor: '#000000', color: '#FFFFFF' },
    'MongoDB': { backgroundColor: '#13AA52', color: '#FFFFFF' },
    'JavaScript': { backgroundColor: '#F0DB4F', color: '#000000' },
    'TypeScript': { backgroundColor: '#3178C6', color: '#FFFFFF' },
    'HTML': { backgroundColor: '#E34F26', color: '#FFFFFF' },
    'CSS': { backgroundColor: '#264DE4', color: '#FFFFFF' },
    'SASS': { backgroundColor: '#CC6699', color: '#FFFFFF' },
    'Bootstrap': { backgroundColor: '#7952B3', color: '#FFFFFF' },
    'Material-UI': { backgroundColor: '#0081CB', color: '#FFFFFF' },
    'React-Bootstrap': { backgroundColor: '#61DAFB', color: '#000000' },
    'Redux': { backgroundColor: '#764ABC', color: '#FFFFFF' },
    'React-Router': { backgroundColor: '#CA4245', color: '#FFFFFF' },
    'Axios': { backgroundColor: '#5A2D81', color: '#FFFFFF' },
    'Jest': { backgroundColor: '#944058', color: '#FFFFFF' },
    'Mocha': { backgroundColor: '#8D6748', color: '#FFFFFF' },
    'Chai': { backgroundColor: '#D4B830', color: '#FFFFFF' },
    'Cypress': { backgroundColor: '#17202C', color: '#FFFFFF' },
    'Jasmine': { backgroundColor: '#8A4182', color: '#FFFFFF' },
    'Git': { backgroundColor: '#F05032', color: '#FFFFFF' },
    'GitHub': { backgroundColor: '#181717', color: '#FFFFFF' },
    'GitLab': { backgroundColor: '#FCA121', color: '#000000' },
    'Heroku': { backgroundColor: '#430098', color: '#FFFFFF' },
    'Netlify': { backgroundColor: '#00C7B7', color: '#FFFFFF' },
    'Vercel': { backgroundColor: '#000000', color: '#FFFFFF' },
}

export function SkillBadge({ skill }: SkillBadgeProps) {
    const { backgroundColor, color } = SKILL_STYLES[skill];

    return (
        <Badge style={{ backgroundColor, color }}>
            {skill}
        </Badge>
    );
};
