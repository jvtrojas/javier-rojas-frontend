import BaseLayout from '../components/layouts/BaseLayout';
import DataRowHomepage from '../components/DataRowHomepage';
import { getVisuals } from '../lib/api';

export async function getStaticProps() {
    const visualsData = await getVisuals();

    return {
        props: { visualsData },
        revalidate: 1,
    };
}

function Visuals({blackSquareTrigger, anchorIsHovered, classToggle, visualsData}) {
        return (
            <BaseLayout className="global" >
                <div className="container-fluid">
                    {visualsData.map((cat)=>{
                        const pictures = cat.pictures;
                        const totalPics = cat.pictures.length;
                        const numberOfRows = Math.ceil(totalPics/15);
                        let content = [];
                        for(var i = 1; i <= numberOfRows; i++) {
                            let tempArray = [];
                            let start = (i -1) * 15;
                            let end = start + 14;
                            tempArray = pictures.slice(start, end)
                            tempArray = tempArray.map((elem)=> {
                                return {
                                    ...elem,
                                    row: i }
                            })
                        content.push(<DataRowHomepage data={tempArray} blackSquareTrigger={blackSquareTrigger} classToggle={classToggle} anchorIsHovered={anchorIsHovered} rowNumber={i} key={i}/>);
                        }
                        return content;
                    })}
                </div>
            </BaseLayout>
        )
    }

export default Visuals;
