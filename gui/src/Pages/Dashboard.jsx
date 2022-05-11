import './styles/Dashboard.css';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="dashboard__header">
                <label className='goBackArrow' htmlFor="goBack" onClick={() => alert('Hi')}> &#5176; </label>
                <input type="hidden" id='goBack'/>
                <h1 className='dashboard-header'>EatOnTime</h1>
            </div>
        </section>
    )
}

export default Dashboard;