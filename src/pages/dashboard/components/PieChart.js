import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

class PieChart extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["Mobile", "Web", "Desktop", "SEO", "IOT"],
      datasets: [
        {
          data: [22, 35, 8, 15, 20],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
          ],
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer className="bg-white py-2 px-3 shadow rounded pt-3 chart-container mt-4">
        <h4 className="font-weight-bold blue-grey-text">Popular</h4>
        <hr />
        <Doughnut
          data={this.state.dataDoughnut}
          options={{ responsive: true }}
          height="220px"
        />
        <h5 className="blue-grey-text mt-3">Details</h5>
        <MDBTable hover>
          <MDBTableHead>
            <tr>
              <th>Service</th>
              <th>%</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td className="py-2">Mobile</td>
              <td className="py-2">22</td>
            </tr>
            <tr>
              <td className="py-2">Web</td>
              <td className="py-2">35</td>
            </tr>
            <tr>
              <td className="py-2">Desktop</td>
              <td className="py-2">8</td>
            </tr>
            <tr>
              <td className="py-2">SEO</td>
              <td className="py-2">15</td>
            </tr>
            <tr>
              <td className="py-2">IOT</td>
              <td className="py-2">20</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    );
  }
}

export default PieChart;
