window.addEventListener("DOMContentLoaded", () => {
    function updateDateTime(){
        const now = new Date();
    
        //formatting date 
        const date = now.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    
        //formatting time
        const time = now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    
        document.getElementById('currentTime').textContent = time;
        document.querySelectorAll('.currentDate').forEach(dateinfo => {
            dateinfo.textContent = date;
        });
    
        setTimeout(updateDateTime, 1000);
    
    }
    // setTimeout(updateDateTime, 5000);
    
    updateDateTime();
});

