import { Card } from "antd"
import { Link } from 'react-router-dom';
import AddToPrefer from "./AddToPrefer"

export default function ActivityItem({ activity }) {
    return (
        <Card
            hoverable
            className="bg-gray activity">
            <Link to={`/activity/${activity.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={activity.image}
                    alt={activity.name}
                    className="activityItem-img" />
            </Link>
            <div className="activity-info">
                <h6 className="activity-category">
                    {activity.category}
                </h6>
                <h2 className="activity-name">
                    {activity.name}
                </h2>
                <div className="activity-more">
                    <Link to={`/activity/${activity.id}`} className="activity-link link">
                        抗抗更多⋯⋯
                    </Link>
                    <AddToPrefer activity={activity} />
                    {/* <Button 
                        type="text" 
                        style={{color:"#eb2f96"}}
                        icon={<HeartTwoTone />} 
                        size="large"
                        className="activity-icon">
                    </Button> */}
                    {/* <HeartTwoTone twoToneColor="#eb2f96" className="activity-icon" /> */}
                </div>
            </div>
        </Card>
    );
}
