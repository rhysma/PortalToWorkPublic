import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
      this.state = { evts: [], loading: true };

    fetch('api/Events/Events')
      .then(response => response.json())
      .then(data => {
        this.setState({ evts: data, loading: false });
      });
  }

    static renderJobsTable(evts) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
                {evts.map(evt =>
                    <tr key={evt.id}>
                        <td>{evt.id}</td>
                        <td>{evt.title}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderJobsTable(this.state.evts);

    return (
      <div>
        <h1>Stuff from API</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
