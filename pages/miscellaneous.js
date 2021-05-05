import BaseLayout from '../components/layouts/BaseLayout';
import DataRow from '../components/DataRow';
import Data from '../public/js/data-miscellaneous.json';

const data = Data.map(each => {return each})

function Miscellaneous() {
    return(
        <BaseLayout className="global" >
            <div className="container-fluid">
                <DataRow data={data} rowNumber="1" />
                <DataRow data={data} rowNumber="2" />
                <DataRow data={data} rowNumber="3" />
            </div>
        </BaseLayout>
    )    
}

export default Miscellaneous