import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
  <div className="container">
    <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
      <div className="row">
        <div className="col-sm-12" style={{marginTop: '8em'}}>
          <a href="/"><img src="img/logo.png" /></a>
        </div>
        {/* <div class="iconmelon">
        <svg viewBox="0 0 32 32">
          <g filter="">
               
            <use xlink:href="#git "></use>
          </g>
        </svg>
      </div> */}
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title text-center">
            Welcome to us <i className="fas fa-heart" />
          </div>
        </div>
        <div className="panel-body">
          <form id="form" className="form-horizontal" method="POST" action="/admin">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input type="text" className="form-control" name="username" placeholder="Email" />
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock" /></span>
              <input type="password" className="form-control" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
              {/* Button */}
              <div className="col-sm-12 controls">
                <button type="submit" className="btn btn-primary pull-right">
                  <i className="glyphicon glyphicon-log-in" /> Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="particles" />
</div>

    )
  }
}
