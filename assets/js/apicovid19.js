const key = `ef81363736msh3948801c68a5e86p1f5229jsna67b61fc7739`;
      const data_container = document.querySelector("#data");
      const country = document.querySelector("#country");

      country.addEventListener("keyup", (e) => {
        e.preventDefault();
        switch (e.keyCode) {
          case 13:
            const country_name = e.target.value;

            console.log(country_name);

            getStatistics(country_name).then((resp) => {
              console.log(resp.data);
              if (resp.data.response.length > 0) {
                data_container.innerHTML = displayStatistics(
                  resp.data.response
                );
              } else {
                data_container.innerHTML = "No Data for this Country ";
              }
            });
            break;
        }
      });

      async function getStatistics(countryName) {
        const api = `https://covid-193.p.rapidapi.com/statistics`;

        const options = {
          method: "GET",
          url: api,
          params: { country: countryName },
          headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": key,
          },
        };

        return await axios.request(options);
      }

      function displayStatistics(data) {
        console.log(data);
        let teDhenat = "";

        if (data.length > 0) {
          data.forEach((item) => {
            teDhenat += `
                  <div class="statistic">
                  <div class="countryinfo">
                      <p>Kontinenti:<br /><span> ${item.continent} </span></h3>
                      <p>Shteti:<br /><span> ${item.country}</span></p>
                      <p>Data:<br /><span> ${item.day}</span></p>
                      </div>
                      <div class="covidCases">
                      <p>Raste aktive:<br /><span> ${item.cases.active}</span></p>
                      <p>Raste të reja:<br /><span> ${item.cases.new}</span></p>
                      <p>Totali i rasteve: <br /><span>${item.cases.total}</span></p>
                      </div>
                      <div class="deathCases">
                      <p>Vdekjet e fundit:<br /><span> ${item.deaths.new}</span></p>
                      <p>Totali i vdekjeve:<br /> <span>${item.deaths.total}</span></p>
                      
                      </div>
                  </div>
                 `;
          });
        }

        return teDhenat;
      }