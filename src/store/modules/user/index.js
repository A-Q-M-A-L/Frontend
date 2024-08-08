// user store
const store = {
    namespaced: true,
    state() {
        return {
            user: {},
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload.user
        },
    },
    actions: {

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
      
    }


}

export default store;
 

