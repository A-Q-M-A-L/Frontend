const store = {
    namespaced: true,
    state() {
      return {
        userTasks: []
      };
    },
    mutations: {
      setTasks(state, payload) {
        state.userTasks = payload.tasks; // Adjust payload.tasks to match the response structure
      }
    },
    actions: {
      async getTaskForUser(context) {
        const Api = 'http://localhost:3000/api/v1/tasks/';
        const token = context.rootGetters.getToken; // Assuming the token is stored in the root state
  
        try {
          const response = await fetch(Api, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Attach the token here
            }
          });
  
          const data = await response.json();
  
          
  
          if (data.status === "success") {
            context.commit("setTasks", { tasks: data.data.tasks }); // Adjusting to access tasks array correctly
            console.log(data.data.tasks);
            
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
      getTaskForUser(state) {
        console.log(state.userTasks);
        
        return state.userTasks;
      }
    }
  };
  
  export default store;
  