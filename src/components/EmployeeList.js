import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        console.log('Component Mounted');
        this.createDataSource();
    }

    createDataSource() {
        this.props.employeesFetch();
    }

    render() {
        return (
            <FlatList
                data={this.props.employees}
                renderItem={employee => <ListItem employee={employee.item} />}
                keyExtractor={employee => employee.uid}
            />
        );
    }

}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shift: 'Monday}, name: 'S', Phone: '555-555-5555', id: '1234'}
    });
    //console.log(employees);
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
