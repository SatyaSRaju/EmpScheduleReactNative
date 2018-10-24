import React from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';
import EmployeeEdit from './src/components/EmployeeEdit';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Stack key="root" hideNavBar>
                <Stack key="auth" >
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Stack>
                <Stack key="main">
                    <Scene 
                        rightTitle="Add"
                        rightTitle="Maps"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title=" Employees"
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
             </Stack>
           </Stack>
        </Router>
    );
};

export default RouterComponent;

