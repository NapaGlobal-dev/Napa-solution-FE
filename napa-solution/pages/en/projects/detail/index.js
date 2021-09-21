import { useParams } from "react-router-dom";
import styles from './index.module.css';
import { Detail, Member, RelatedProject } from 'components/en/detail';
import { Consultation } from 'components/en/ourworks';
import { FetchDetailProject } from "services/en/data/detailProject";

function DetailProjects(props) {
    const query = useParams();
    const { loadingDP, detailProject } = FetchDetailProject(query?.id);
    const data = { ...detailProject?.project[0] };
    return (
        <div className={styles.root}>
            <Detail data={data} loading={loadingDP} />
            <Member data={data} loading={loadingDP} />
            <RelatedProject {...props} />
            <div className={styles.wrapConsultation}><Consultation /></div>
        </div>
    )
}

export default DetailProjects;