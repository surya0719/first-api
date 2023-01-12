fetch("https://kontests.net/api/v1/all")
          .then((response) => response.json())
          .then((data) => {
            console.log(data[0])

          data.forEach(element => {
            const open={
                ...element,
                name:element.name,
                start:element.start_time,
                end:element.end_time,
                site:element.site,
                status:element.status,
                url:element.url

            }
            website(open)
          });
        })
          .catch(error=>console.log(error))

          function website({name,start,end,site,status,url}){
          document.body.innerHTML +=`
          <div class="container">
          <h5 class="name">Name: ${name}</h5>
          <span>Start-time: ${start}</span><br>
          <span>End-time: ${end}</span><br>
          <span>Site: ${site}</span>
          <span>Status: ${status}</span><br>
          <span>Url: ${url}</span>
          </div>
          
          `
          } 


               
        
        