import React, { useEffect, useState } from 'react'
import WorkspacesCard from '../../components/WorkspacesCard/WorkspacesCard'
import workspaces from '../../workspaces/workspaces.json'

const Home = () => {
    const [workspaceData, setWorkspaceData] = useState([])

    useEffect(() => {
        // simulate fetching data from JSON file
        setWorkspaceData(workspaces);
    });

    return (
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workspaceData.map((workspace) => (
                <WorkspacesCard
                    key={workspace.id}
                    image={workspace.image}
                    location={workspace.location}
                    type={workspace.type}
                    price={workspace.price}
                    rating={workspace.rating}
                />
            ))}
        </div>
    );
};

export default Home;