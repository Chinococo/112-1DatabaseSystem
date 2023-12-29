import { apiMemberTaskList, apiTaskList, apiTaskView } from "../components/API"
import ActivityContext from "../contexts/ActivityContext"
import MemberContext from "../contexts/MemberContext"
import TaskContext from "../contexts/TaskContext"
import React from "react"
import storage from "store2"

// *** update taskCtx.tasks
export const useTasks = id => {
  //const [tasksState, setTasksState] = React.useState([])
  //const [taskLoading, setTaskLoading] = React.useState("false");
  const activityCtx = React.useContext(ActivityContext)
  const memberCtx = React.useContext(MemberContext)
  const taskCtx = React.useContext(TaskContext)

  /**
   * fetch all tasks.
   * @param {function} callbackResult set all tasks list result to your callbackResult function.
   */
  async function fetchAllTasks(callbackResult) {
    try {
      let resp = await apiTaskList()
      //taskCtx.setAllTasks(resp.data)
      callbackResult(resp.data)
    } catch (error) {
      console.log("apiTaskView response error: ", error)
    }
  }

  async function fetchTasks(id) {
    let tasks = []
    let targetActivityIndex = activityCtx.activityList.findIndex(obj => {
      return obj.id === parseInt(id)
    })
    let actId = activityCtx.activityList[targetActivityIndex].id

    let taskIds = activityCtx.activityList[targetActivityIndex].taskId //object list
    taskIds = taskIds.replaceAll("{", "")
    taskIds = taskIds.replaceAll("}", "")
    taskIds = taskIds.split(",")
    taskIds.forEach((item, idx, array) => {
      array[idx] = parseInt(item)
    })

    for (const tid of taskIds) {
      await apiTaskView(tid)
        .then(res => {
          if (res.data != "") tasks.push(res.data)
        })
        .catch(error => {
          console.log("apiTaskView response error: ", error)
        })
    }
    //console.log("phase1 tasks: ", tasks)

    let memberTasks = []
    try {
      await apiMemberTaskList(memberCtx.member.line_userId, actId)
        .then(res => {
          memberTasks = res.data
        })
        .catch(error => {
          console.log("apiMemberTaskList response error: ", error)
        })
    } catch (error) {
      console.log("getTasks FAILED: ", error)
    }
    let memberTasks_taskIds = memberTasks.map(element => {
      return element.taskId
    })
    tasks.forEach(element => {
      if (memberTasks_taskIds.includes(element.id)) element.isChecked = true
      else element.isChecked = false
    })

    taskCtx.setTasks(tasks)
    storage.set("tasks", tasks)
    //console.log("phase2 taskCtx.tasks: ", taskCtx.tasks)
  }
  return { fetchAllTasks, fetchTasks }

  // React.useEffect(() => {
  //   async function getTasks() {
  //     let tasks = [];
  //     let targetActivityIndex = activityCtx.activityList.findIndex((obj) => {
  //       return obj.id === parseInt(id)
  //     })
  //     let actId = activityCtx.activityList[targetActivityIndex].id;

  //     let taskIds = activityCtx.activityList[targetActivityIndex].taskId; //object list
  //     taskIds = taskIds.replaceAll("{", "");
  //     taskIds = taskIds.replaceAll("}", "");
  //     taskIds = taskIds.split(",")
  //     taskIds.forEach((item, idx, array) => {
  //       array[idx] = parseInt(item);
  //     })

  //     for (const tid of taskIds) {
  //       try {
  //         await apiTaskView(tid)
  //           .then(res => {
  //             if (res.data != "")
  //               tasks.push(res.data);
  //           }).catch(error => {
  //             console.log("apiTaskView response error: ", error)
  //           })
  //       } catch (error) {
  //         console.log("getTasks FAILED: ", error);
  //       }
  //     }
  //     //console.log("phase1 tasks: ", tasks)

  //     let memberTasks = [];
  //     try {
  //       await apiMemberTaskList(memberCtx.member.line_userId, actId)
  //         .then(res => {
  //           memberTasks = res.data;
  //         }).catch(error => {
  //           console.log("apiMemberTaskList response error: ", error)
  //         })
  //     } catch (error) {
  //       console.log("getTasks FAILED: ", error);
  //     }
  //     let memberTasks_taskIds = memberTasks.map(element => {
  //       return element.taskId;
  //     })
  //     tasks.forEach(element => {
  //       if (memberTasks_taskIds.includes(element.id))
  //         element.isChecked = true;
  //       else
  //         element.isChecked = false;
  //     });

  //     taskCtx.setTasks(tasks);
  //     storage.set('tasks', tasks)
  //     //console.log("phase2 taskCtx.tasks: ", taskCtx.tasks)
  //   }

  //   getTasks();
  // }, [id])
  //return { tasksState, taskLoading };
}
