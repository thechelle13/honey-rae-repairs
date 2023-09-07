export const TicketFilterBar = ({setShowEmergencyOnly, setNonEmergency, setSearchTerm}) => {
    return (
        <div className="filter-btn">
            <button className="filter-btn btn-primary" 
                onClick={()=> {setShowEmergencyOnly(true); setNonEmergency(false)}}
                >Emergency
            </button>
            <button className="filter-btn btn-secondary" 
                onClick={()=> {setShowEmergencyOnly(false); setNonEmergency(true)}}
                >Non Emergency
            </button>
            <button className="filter-btn  btn-info" 
                onClick={()=> {setShowEmergencyOnly(false); setNonEmergency(false)}}
                >Show All
            </button>
            <input 
                onChange={(event) => {
                setSearchTerm(event.target.value)
                }} 
                type="text"
                placeholder="Search Tickets"
                className="ticket-search" 
            />    
        </div>
    )
}