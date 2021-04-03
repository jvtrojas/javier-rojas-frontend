import BaseLayout from '../components/layouts/BaseLayout';
import DataRow from '../components/DataRow';
import Data from '../public/js/data-music.json';

const data = Data.map(each => {return each})

function Music({shuffleOrder}) {
    return(
        <BaseLayout className="global" >
            <div className="container-fluid">
                <DataRow data={data} shuffleOrder={shuffleOrder} rowNumber="1" />
                <DataRow data={data} shuffleOrder={shuffleOrder} rowNumber="2" />
                <DataRow data={data} shuffleOrder={shuffleOrder} rowNumber="3" />
            </div>
        </BaseLayout>
    )    
}

export default Music