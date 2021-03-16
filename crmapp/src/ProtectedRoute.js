import React, {
    useEffect,
    // useState
} from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

function ProtectedRoute(props) {
    console.log(props)
    let { path, component, isLoggedIn, moduleName, permission } = props
    // const [permission, setPerission] = useState(moduleName)
    function isHavePermission(e) {
        console.log(permission.includes(moduleName))
        return permission.includes(moduleName);
    }

    useEffect(() => {
        // setPerission(props.permission)
        // eslint-disable-next-line
    }, [props])

    return (
        <>
            {isLoggedIn && isHavePermission() ? <Route path={path} exact component={component} /> : <Redirect to='/' from='' />}
        </>
    )
}

const mapGetStoreData = (state) => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        permission: state.loginReducer.permission
    }
}
export default connect(mapGetStoreData)(ProtectedRoute)
