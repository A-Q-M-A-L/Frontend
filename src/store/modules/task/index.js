const store = {
  namespaced: true,
  state() {
    return {
      CurrentUserTasks: [],
      AllTasks:[]
    };
  },
  mutations: {
    setTasks(state, payload) {
      state.CurrentUserTasks = payload.tasks; // Adjust payload.tasks to match the response structure
    },
    AllTasks(state, payload) {
      state.AllTasks = payload.AllTasks; // Adjust payload.tasks to match the response structure
    }
  },
  actions: {
    async getTasksForCurrentUser(context) {
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
    },
    // Creating New Task
    async createNewTask(context, payload) {
      const Api = 'http://localhost:3000/api/v1/tasks/';
      const token = context.rootGetters.getToken; // Assuming the token is stored in the root state

      console.log(token);


      try {
        const response = await fetch(Api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}` // Attach the token here
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.status === "success") {
          alert(data.message);
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
    // Getting All tasks
    async getAllTasks(context) {
      const Api = 'http://localhost:3000/api/v1/tasks/getAllTasks';
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
          context.commit("AllTasks", { AllTasks: data.data.tasks }); // Adjusting to access tasks array correctly
          console.log(data.data.tasks);

          return true; // Ensure true is returned
        } else if (data.status === "fail") {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.log("something went wrong");
        alert(error);
      }
    }
  },


  getters: {
    CurrentUserTasks(state) {
      return state.CurrentUserTasks;
    },
    
    AllTasks(state){
      return state.AllTasks;
    }
  }
};

export default store;
