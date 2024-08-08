// user store
const store = {
    namespaced: true,
    state() {
        return {
            user: {},
            allUsers:[]
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        },
        setAllUsers(state, payload) {
            state.allUsers = payload.allUsers
        }
    },
    actions: {
       
        // login user
        async login(context, payload) {
            const Api = 'http://localhost:3000/api/v1/users/';
            try {
                const response = await fetch(Api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password
                    })
                });

                const data = await response.json();

                if (data.status === "success") {
                    context.commit("setUser", { user: data.data.user });
                    context.commit('setToken', { token: data.token }, { root: true });
                    return true; // Ensure true is returned
                } else if (data.status === "fail") {
                    alert("Error: " + data.message);
                    return false; // Ensure false is returned
                }
            } catch (error) {
                console.log("something went wrong");
                alert(error);
                return false; // Ensure false is returned in case of error
            }
        },

        // Get All Users
        async getAllUsers(context) {
            const Api = 'http://localhost:3000/api/v1/users/';
            let token = context.rootGetters['getToken'];
            try {
                const response = await fetch(Api, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json();

                // console.log(data);

                if (data.status === "success") {
                    context.commit("setAllUsers", { allUsers: data.data.users });
                    return true; // Ensure true is returned
                } else if (data.status === "fail") {
                    alert("Error: " + data.message);
                    return false; // Ensure false is returned 
                }   
                } catch (error) {
                    console.log("something went wrong");
                    alert(error);
                    return false; // Ensure false is returned in case of error
                }
        }

    },
    getters: {
        getUser(state) {
            return state.user
        },
        userIs(state) {

            if (state.user.role === "admin") {
                return 'admin'
            } else if (state.user.role === "projectManager") {
                return 'projectManager'
            } else if (state.user.role === "employee") {
                return 'employee'
            }
        },
        getAllUsers(state) {
            return state.allUsers
        }
      
    }


}

export default store;
 

