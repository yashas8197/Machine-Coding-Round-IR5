const Statistics = () => {
  return (
    <div className="container my-4" style={{ height: "70rem" }}>
      <h1>User Statistics</h1>
      <hr />
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0 my-2">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Total Numbers of Users</h4>
              <p class="card-text display-3">10</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0 my-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Paid Users</h5>
              <p class="card-text display-3">5</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mb-3 mb-sm-0 my-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Most Valuable User</h5>
              <p class="card-text display-3">Leanne Graham</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
