var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});

var SearchBar = React.createClass({
    searchHandler: function() {
        this.props.searchHandler(this.refs.searchKey.getDOMNode().value);
    },
    render: function () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" ref="searchKey" onChange={this.searchHandler} value={this.props.searchKey}/>
            </div>

        );
    }
});

var EmployeeListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#employees/" + this.props.employee.id}>
                    <img className="media-object small pull-left" src={"pics/" + this.props.employee.firstName + "_" + this.props.employee.lastName + ".jpg" }/>
                    {this.props.employee.firstName} {this.props.employee.lastName}
                    <p>{this.props.employee.title}</p>
                </a>
            </li>
        );
    }
});

var EmployeeList = React.createClass({
    render: function () {
        var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="Employee Directory" back="false"/>
                <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
                <div className="content">
                    <EmployeeList employees={this.props.employees}/>
                </div>
            </div>
        );
    }
});

var EmpWeather = React.createClass({
    getInitialState: function() {
        return {
            weatherDescription: "loading",
            weatherTemp: "not sure yet"
        };
    },

    componentDidMount: function() {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.props.location; + "&appid=716f8bdc119843c7e88b7ada22d5d7c3";
        console.log(url);
        this.serverRequest = $.get(url, function (result) {
            this.setState({
                weatherDescription: result.weather[0].description,
                weatherTemp: result.main.temp
            })
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div>
                <div className="push-right">Weather for {this.props.location}</div>
                <div className="media-body">{this.state.weatherDescription} {this.state.weatherTemp}</div>
            </div>
        );
    }
});

var EmployeePage = React.createClass({
    getInitialState: function() {
        var advpage = new window.ADRUM.events.VPageView({url: "EmployeePage"});
        return {employee: {}, advpage: advpage};
    },
    componentWillMount: function() {
        console.log("componentWillMount");
        this.state.advpage.start();
        this.state.advpage.markViewChangeStart();
    },
    componentDidMount: function() {
        console.log("componentDidMount");
        this.props.service.findById(this.props.employeeId).done(function(result) {
            this.setState({employee: result});
        }.bind(this));
    },
    componentWillUpdate: function() {
        console.log("componentWillUpdate");
    },
    componentDidUpdate: function() {
        var adp = this.state.advpage;
        adp.markViewChangeEnd();
        window.setTimeout(function(){
            adp.end();
            console.log("Virtual Page End")},0);
        window.setTimeout(function(){
            window.ADRUM.report(adp); 
            console.log("Report Timings")}, 10000);
        console.log("componentDidUpdate");
    },
    componentWillUnmount: function() {
        console.log("componentWillUnmount");
    },
    render: function () {
        console.log("render");
        this.state.advpage.markViewChangeStart();
        return (
            <div className={"page " + this.props.position}>
                <Header text="Employee" back="true"/>
                <div className="card">
                    <ul className="table-view">
                        <li className="table-view-cell media">
                            <img className="media-object big pull-left" src={"pics/" + this.state.employee.firstName + "_" + this.state.employee.lastName + ".jpg" }/>
                            <h1>{this.state.employee.firstName} {this.state.employee.lastName}</h1>
                            <p>{this.state.employee.title}</p>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"tel:" + this.state.employee.officePhone} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Call Office
                                    <p>{this.state.employee.officePhone}</p>
                                </div>
                            </a>
                        </li>
                        
                        <li className="table-view-cell media">
                            <a href={"/realweather?geo=" + this.state.employee.location} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Location
                                    <p>{this.state.employee.location}</p>
                                </div>
                            </a>
                        </li>

                        <li className="table-view-cell media">                        
                            <EmpWeather location={this.state.employee.location}/>
                        </li>

                        <li className="table-view-cell media">
                            <a href={"tel:" + this.state.employee.mobilePhone} className="push-right">
                                <span className="media-object pull-left icon icon-call"></span>
                                <div className="media-body">
                                Call Mobile
                                    <p>{this.state.employee.mobilePhone}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"sms:" + this.state.employee.mobilePhone} className="push-right">
                                <span className="media-object pull-left icon icon-sms"></span>
                                <div className="media-body">
                                SMS
                                    <p>{this.state.employee.mobilePhone}</p>
                                </div>
                            </a>
                        </li>
                        <li className="table-view-cell media">
                            <a href={"mailto:" + this.state.employee.email} className="push-right">
                                <span className="media-object pull-left icon icon-email"></span>
                                <div className="media-body">
                                Email
                                    <p>{this.state.employee.email}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    getInitialState: function() {
        return {
            searchKey: '',
            employees: []
        }
    },
    searchHandler: function(searchKey) {
        employeeService.findByName(searchKey).done(function(employees) {
            this.setState({
                searchKey:searchKey,
                employees: employees,
                pages: [<HomePage key="list" searchHandler={this.searchHandler} searchKey={searchKey} employees={employees}/>]});
        }.bind(this));
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="list" searchHandler={this.searchHandler} searchKey={this.state.searchKey} employees={this.state.employees}/>);
        }.bind(this));
        router.addRoute('employees/:id', function(id) {
            this.slidePage(<EmployeePage key="details" employeeId={id} service={employeeService}/>);
        }.bind(this));
        router.start();
    }
});

React.render(<App/>, document.body);