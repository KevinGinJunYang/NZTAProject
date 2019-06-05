var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {

    //---------VIEW TYPES ----------------------
    $scope.showRoad = false;
    $scope.searchVisable = false;
    $scope.showUpdates = false;
    $scope.navVisable = false;
    $scope.loginVisable = true;
    $scope.projectVisable = false;
    $scope.showProjectRoad = false;
    $scope.name = "Jennifer Lawrence";
    $scope.showAddRoad = false;
    $scope.showDeleteRoad = false;
    $scope.showDeleteProject = false;
    $scope.showEditProject = false;
    $scope.showEditWorks = false;
    $scope.showDeleteProblem = false;
    $scope.showDeleteComment = false;
    $scope.navVisableInspector = false;
    $scope.navVisableContractor = false;
    $scope.managerMode = false;
    $scope.contractorMode = false;
    $scope.showArchive = false;
    //ROAD
    $scope.roads = null;
    $scope.roadID = null;
    $scope.roadCode = null;
    $scope.roadType = null;
    $scope.roadSection = null;
    $scope.roadLocation = null;
    $scope.roadGPS = null;
    //PROJECT
    $scope.projects = null;
    $scope.projectID = null;
    $scope.projectRoad = null;
    $scope.ProjectName = null;
    $scope.projectStatus = null;
    $scope.projectStartDate = null;
    $scope.projectEndDate = null;
    $scope.projectContractor = null;
    $scope.projectProblems = null;
    $scope.projectProblemsAuthor = null;
    $scope.projectProblemsText = null
    $scope.projectCommentsAuthor = null;
    $scope.projectCommentsText = null;
    $scope.projectWorksType = null;
    $scope.projectWorksSubContractors = null;
    $scope.projectWorksStatus = null;
    $scope.currentComments = null;
    $scope.currentProblems = null;
    $scope.currentWorks = null;
    $scope.archivedValues = [];
    $scope.archivedProjects = [];

    //------ SHOW DIFFERENT PAGES FROM NAV BAR ----------

    $scope.showHide = function(x) {
        $scope.showRoad = $scope.showRoad = true;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showEditProject = false;
        $scope.showArchives = false;
        //READ IN DIFF VALUES 
        for (i = 0; i < $scope.roads.length; i++) {
            if ($scope.roads[i] == x) {
                $scope.roadID = $scope.roads[i].ID;
                $scope.roadCode = $scope.roads[i].Code;
                $scope.roadType = $scope.roads[i].Type;
                $scope.roadSection = $scope.roads[i].Section;
                $scope.roadLocation = $scope.roads[i].Location;
                $scope.roadGPS = $scope.roads[i].GPS;
            }
        }
        
        for (i = 0; i < $scope.archivedValues.length; i++) {
            if ($scope.archivedValues[i] == x) {
                $scope.roadID = $scope.archivedValues[i].ID;
                $scope.roadCode = $scope.archivedValues[i].Code;
                $scope.roadType = $scope.archivedValues[i].Type;
                $scope.roadSection = $scope.archivedValues[i].Section;
                $scope.roadLocation = $scope.archivedValues[i].Location;
                $scope.roadGPS = $scope.archivedValues[i].GPS;
            }
        }


    }

    $scope.showSearch = function() {
        $scope.searchVisable = $scope.searchVisable = true;
        $scope.showRoad = $scope.showRoad = false;
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.showWellington = false;
        $scope.deleteFeedback = "";
        $scope.roadFeedback = "";
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addRoadID = "";
        $scope.addRoadCode = "";
        $scope.addRoadType = "";
        $scope.addRoadSection = "";
        $scope.addRoadLocation = "";
        $scope.addRoadGPS = "";
        $scope.searchInput = "";
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showAddProject = false;
        $scope.showEditProject = false;
        $scope.showDeleteComment = false;
        $scope.showDeleteProblem = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;
        $scope.showArchives = false;


    }

    $scope.showUpdate = function() {
        $scope.showUpdates = $scope.showUpdates = true;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showRoad = $scope.showRoad = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showAddProject = false;
        $scope.textFeedback = "";
        $scope.showEditProject = false;
        $scope.showDeleteComment = false;
        $scope.showDeleteProblem = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;
        $scope.showArchives = false;

    }

    $scope.showProject = function() {
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showRoad = $scope.showRoad = false;
        $scope.projectVisable = $scope.projectVisable = true;
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.addNewProject = false;
        $scope.showAddProject = false;
        $scope.textFeedback = "";
        $scope.showEditProject = false;
        $scope.showDeleteComment = false;
        $scope.showDeleteProblem = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;
        $scope.showArchives = false;

    }

    $scope.showLogOut = function() {
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showRoad = $scope.showRoad = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.loginVisable = $scope.loginVisable = true;
        $scope.navVisable = $scope.navVisable = false;
        $scope.navVisableInspector = false;
        $scope.navVisableContractor = false;
        $scope.feedback = "";
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showEditProject = false;
        $scope.showDeleteComment = false;
        $scope.showDeleteProblem = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;
        $scope.managerMode = false;
        $scope.contractorMode = false;
        $scope.showArchives = false;
        $scope.showAddProject = false;
        $scope.loginUsername = "";
        $scope.loginPassword = "";
    }


    $scope.deleteProject = function() {
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showRoad = $scope.showRoad = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.loginVisable = $scope.loginVisable = false;
        $scope.feedback = "";
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.showDeleteProject = true;
        $scope.showEditProject = false;
        $scope.showDeleteComment = false;
        $scope.showDeleteProblem = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;
    }




    $scope.showProjectInfo = function(x) {
        $scope.showRoad = $scope.showRoad = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.showProjectRoad = true;
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showEditProject = false;
        $scope.showDeleteComment = false;
        $scope.showDeleteProblem = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;


        for (i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i] == x) {
                $scope.currentComments = $scope.projects[i].Comments;
                $scope.currentProblems = $scope.projects[i].Problems;
                $scope.currentWorks = $scope.projects[i].Works;
                $scope.projectID = $scope.projects[i].ID;
                $scope.projectRoad = $scope.projects[i].Road;
                $scope.projectName = $scope.projects[i].Name;
                $scope.projectStatus = $scope.projects[i].Status;
                $scope.projectStartDate = $scope.projects[i].StartDate;
                $scope.projectEndDate = $scope.projects[i].EndDate;
                $scope.projectContractor = $scope.projects[i].Contractor;
                
            }
        }
        
        for (i = 0; i < $scope.archivedProjects.length; i++) {
            if ($scope.archivedProjects[i] == x) {
                $scope.currentComments = $scope.archivedProjects[i].Comments;
                $scope.currentProblems = $scope.archivedProjects[i].Problems;
                $scope.currentWorks = $scope.archivedProjects[i].Works;
                $scope.projectID = $scope.archivedProjects[i].ID;
                $scope.projectRoad = $scope.archivedProjects[i].Road;
                $scope.projectName = $scope.archivedProjects[i].Name;
                $scope.projectStatus = $scope.archivedProjects[i].Status;
                $scope.projectStartDate = $scope.archivedProjects[i].StartDate;
                $scope.projectEndDate = $scope.archivedProjects[i].EndDate;
                $scope.projectContractor = $scope.archivedProjects[i].Contractor;
                
            }
        }
        
        

    }

    $scope.showAdd = function() {
        $scope.showRoad = $scope.showRoad = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.showProjectRoad = false;
        $scope.showAddRoad = true;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showEditProject = false;
    }

    $scope.showDelete = function() {
        $scope.showRoad = $scope.showRoad = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.showProjectRoad = false;
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = true;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
        $scope.showEditProject = false;
        $scope.showDeleteWorks = false;
    }

    $scope.createProject = function() {
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showRoad = $scope.showRoad = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.loginVisable = $scope.loginVisable = false;
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.showDeleteProject = false;
        $scope.showAddProject = true;
        $scope.showDeleteProject = false;
        $scope.showEditProject = false;
        $scope.showEditWorks = false;
        $scope.showDeleteWorks = false;
    }
    
     $scope.editProject = function() {
      $scope.showEditProject = true;
      $scope.showProjectRoad = false;

    }
    
    $scope.deleteComment = function(){
      $scope.showDeleteComment = true;
      $scope.showProjectRoad = false;
     
    }
    
    $scope.deleteProblem = function() {
      $scope.showDeleteProblem = true;
      $scope.showProjectRoad = false;
      
    }
    
    $scope.editWorks = function() {
      $scope.showEditWorks = true;
      $scope.showProjectRoad = false;
     
    }
    
    $scope.deleteWorks = function(){
      $scope.showDeleteWorks = true;
      $scope.showProjectRoad = false;
      
    }
    
    $scope.showArchive = function(){
      $scope.showArchives = true;
      $scope.showUpdates = $scope.showUpdates = false;
      $scope.searchVisable = $scope.searchVisable = false;
      $scope.showRoad = $scope.showRoad = false;
      $scope.projectVisable = $scope.projectVisable = false;
      $scope.showProjectRoad = false
      $scope.showAddRoad = false;
      $scope.showDeleteRoad = false;
      $scope.addProject = false;
      $scope.showDeleteProject = false;
      $scope.addNewProject = false;
      $scope.showAddProject = false;
      $scope.textFeedback = "";
      $scope.showEditProject = false;
      $scope.showDeleteComment = false;
      $scope.showDeleteProblem = false;
      $scope.showEditWorks = false;
      $scope.showDeleteWorks = false;
    }
    

    //----------LOGIN FUNCTION ------------------------------

    $scope.logins = null;
    //GET LOGIN INFO FROM HTTPGET
    $scope.loginCall = $http.get('https://track.sim.vuw.ac.nz/api/yangkevi/user_list.json')
        .then(
            function sucessCall(response) {
                $scope.logins = response.data.Users;
            },
        );

    $scope.checkLogin = function() {

        for (i = 0; i < $scope.logins.length; i++) {
            if ($scope.logins[i].LoginName == $scope.loginUsername && $scope.logins[i].Password == $scope.loginPassword) {
              if($scope.logins[i].UserType =='inspector'){
                  $scope.loginVisable = $scope.loginVisable = false;
                  $scope.navVisable = false;
                  $scope.navVisableInspector = true;
                  $scope.name = $scope.loginUsername.toUpperCase();
                  $scope.searchVisable = true;
                  $scope.navVisableContractor = false;
              } else if ($scope.logins[i].UserType =='contractor'){
                  $scope.loginVisable = $scope.loginVisable = false;
                  $scope.navVisable = false;
                  $scope.navVisableInspector = false;
                  $scope.navVisableContractor = true;
                  $scope.name = $scope.loginUsername.toUpperCase();
                  $scope.projectVisable = true;
                  $scope.contractorMode = true;
                
              } else if ($scope.logins[i].UserType =='manager'){
                  $scope.loginVisable = $scope.loginVisable = false;
                  $scope.navVisable = $scope.navVisable = true;
                  $scope.navVisableInspector = false;
                  $scope.name = $scope.loginUsername.toUpperCase();
                  $scope.showUpdates = true;
                  $scope.managerMode = true;
                
              }
            } else {
                $scope.feedback = "Invalid password or username.";
            }
        }
    }

    //----------------GET ROAD INFO FROM HTTPGET---------------------

    $scope.roadCall = $http.get('https://track.sim.vuw.ac.nz/api/acbbbb/road_dir.json')
        .then(
            function successCall(response) {
                $scope.roads = response.data.Roads;
            },
        );

    //-----------GET PROJECT INFO FROM HTTPGET -------------------------------

    $scope.projectCall = $http.get('https://track.sim.vuw.ac.nz/api/acbbbb/project_dir.json')
        .then(
            function successCall(response) {
                $scope.projects = response.data.Projects;
            },
        );

    // -------------SEARCH FUNCTION--------------------------------
    $scope.showWellington = false;

    $scope.showAllRoads = function() {

        let wellington = "wellington"

        if ($scope.searchInput.toLowerCase() == wellington) {
            $scope.showWellington = true;
            $scope.feedbackSearch = "";

        } else {
            $scope.showWellington = false;
            $scope.feedbackSearch = "Invalid search, no roads found. (Try wellington)";

        }

    };


    //-------------ADD ROAD TO JSON SERVER----------------------------------
    var addLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/update.road.json';

    $scope.checkAddedRoad = function() {

        if ($scope.addRoadID == null) {
            $scope.addRoadID = "100000";
        }

        var newRoadObject = {
            "ID": $scope.addRoadID,
            "Code": $scope.addRoadCode,
            "Type": $scope.addRoadType,
            "Section": $scope.addRoadSection,
            "Location": $scope.addRoadLocation,
            "GPS": $scope.addRoadGPS
        };



        $scope.addNewRoad = $http({
                method: "POST",
                url: addLink,
                data: newRoadObject,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                function sucessCall(response) {
                    $scope.roadFeedback = "Road Added Successfully!. ";
                    $scope.roads.push(newRoadObject);

                },
            );

    };

    //-------------------DELETE ROAD FROM JSON SERVER -------------------------------
    $scope.confirmDelete = function() {
        var deleteLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/delete.road.' + $scope.selected + '.json';
        var deleteRoadData = null;
        for (var i = 0; i < $scope.roads.length; i++) {
            if ($scope.selected == $scope.roads[i].ID) {
                deleteRoadData = {
                    "ID": $scope.roads[i].ID,
                    "Code": $scope.roads[i].Code,
                    "Type": $scope.roads[i].Type,
                    "Section": $scope.roads[i].Section,
                    "Location": $scope.roads[i].Location,
                    "GPS": $scope.roads[i].GPS
                };
            }
        }

        var toDelete = JSON.stringify(deleteRoadData);
        
        $scope.deleteRoad = $http({
                method: "DELETE",
                url: deleteLink,
                data: toDelete,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                function sucessCall(response) {
                    $scope.deleteFeedback = "Road Deleted Successfully!. ";
                    $scope.roads.pop(deleteRoadData);
                },
            );

    };

    //------------------ADD PROJECT FROM JSON SERVER --------------------------------
    var addProjectLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/update.project.json';

    $scope.checkAddProject = function() {
      
      var problems = [{
            "Author": $scope.projectProblemAuthor,
            "Text": $scope.projectProblemText
        }];
        
        
      var comments = [{
            "Author": $scope.projectCommentAuthor,
            "Text": $scope.projectCommentText
        }];
        
        
      var works = [{
            "Type": $scope.projectWorksType,
            "SubContractors": $scope.projectWorksSubContractor,
            "Status": $scope.projectWorksStatus
        }];
        
      
       var newProjectData = {
            "ID": $scope.projectID,
            "Road": $scope.projectRoad,
            "Name": $scope.projectName,
            "Status": $scope.projectStatus,
            "StartDate": $scope.projectStartDate,
            "EndDate": $scope.projectEndDate,
            "Contractor": $scope.projectContractor,
            "Problems": problems,
            "Comments": comments,
            "Works": works
      
     };
     
     $scope.addNewProject = $http({
                method: "POST",
                url: addProjectLink,
                data: newProjectData,
              
            })
            .then(
                function sucessCall(response) {
                    $scope.projectFeedback = "Added Road project successfully!. ";
                    $scope.projects.push(newProjectData);

                }, function errorCall(){
                  $scope.projectFeedback = "Failed to add project";
                }
                  
            );
      
    };
    
   




    //-------------------DELETE PROJECT FORM JSON SERVER ---------------------------
    $scope.confirmDeleteProject = function(){
    var deleteProjectLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/delete.project.' + $scope.selected + '.json';
    var deleteProjectData = null;
    var deleteComments = null;
    var deleteWorks = null;
    var deleteProblems = null;
    
    for (var i = 0; i < $scope.projects.length; i++) {
            if ($scope.selected == $scope.projects[i].ID) {
              for (z = 0; z < $scope.projects[i].Problems.length; z++) {
                deleteProblems = [{
                  "Author": $scope.projects[i].Problems[z].Author,
                  "Text": $scope.projects[i].Problems[z].Text
                }];
              }
                
                
              for (y = 0; y < $scope.projects[i].Comments.length; y++) {
                deleteComments = [{
                  "Author": $scope.projects[i].Comments[y].Author,
                  "Text": $scope.projects[i].Comments[y].Text
                }];
              }
                
              
              for (x = 0; x < $scope.projects[i].Works.length; x++) {
                deleteWorks = [{
                  "Type": $scope.projects[i].Works[x].Type,
                  "SubContractors": $scope.projects[i].Works[x].SubContractor,
                  "Status": $scope.projects[i].Works[x].Status
                }];
              }
              
                deleteProjectData = {
                    "ID": $scope.projects[i].ID,
                    "Road": $scope.projects[i].Road,
                    "Name": $scope.projects[i].Name,
                    "Status": $scope.projects[i].Status,
                    "StartDate": $scope.projects[i].StartDate,
                    "EndDate": $scope.projects[i].EndDate,
                    "Contractor": $scope.projects[i].Contractor,
                    "Problems": deleteProblems,
                    "Comments": deleteComments,
                    "Works": deleteWorks
                };
            }
        }
        
        var toDeleteProject = JSON.stringify(deleteProjectData);
        
        $scope.deleteProject = $http({
                method: "DELETE",
                url: deleteProjectLink,
                data: toDeleteProject,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                function sucessCall(response) {
                    $scope.deleteProjectFeedback = "Project Deleted Successfully!. ";
                    $scope.projects.pop(deleteProjectData);
                }, function errorCall(){
                  $scope.deleteProjectFeedback = "Failed to delete project ";
                }
            );
    };




//-----------------------ADD COMMENT BOTH LOCALY AND TO SERVER  ----------------------------------------
   
    $scope.addComment = function() {
      var addCommentLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/update.project.json';
     
      var newComment = {
            "Author": $scope.name,
            "Text": $scope.userComment
        };
        
      for(i =0; i < $scope.projects.length; i++){
        if($scope.projectID == $scope.projects[i].ID){
           $scope.projects[i].Comments.push(newComment);
        }
        $scope.currentComments = $scope.projects[i].Comments;
      }
      
      var problems = [{
            "Author": $scope.projectProblemAuthor,
            "Text": $scope.projectProblemText
        }];
        
        

      var works = [{
            "Type": $scope.projectWorksType,
            "SubContractors": $scope.projectWorksSubContractor,
            "Status": $scope.projectWorksStatus
        }];
        
      var sourceObj = { 
	    "ID": $scope.projectID,
      "Road": $scope.projectRoad,
	    "Name": $scope.projectName,
	    "Status": $scope.projectStatus,
      "StartDate": $scope.projectStartDate,
      "EndDate": $scope.projectEndDate,
      "Contractor": $scope.projectContractor,
	    "Problems": $scope.currentProblems,
      "Works": $scope.currentWorks,
	    "Comments": $scope.currentComments
    };
    
    
         $scope.addNewComment = $http({
                method: "POST",
                url: addCommentLink,
                data: sourceObj,
              
            })
            .then(
                function sucessCall(response) {
                    $scope.textFeedback = "Comment added!";
                     $scope.currentComments = $scope.projects[$scope.projectID].Comments;
                     for(i = 0; i < $scope.projects.length; i++){
                        if($scope.projectID == $scope.projects[i].ID){
                          $scope.projects[i].Comments.push(newComment);
                        }
                     }

                }, function errorCall(){
                  $scope.textFeedback = "Failed to add comment";
                }
                  
            );
              
      }
   
//-----------SAVE CHANGES----------------------------------

  $scope.saveProject = function(){
    var updateLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/update.project.json';
    
    for(i = 0; i < $scope.projects.length; i++){
      if($scope.projects[i].ID == $scope.projectID){
      $scope.projects[i].ID = $scope.editID
      $scope.projects[i].Road = $scope.projectRoad
      $scope.projects[i].Name = $scope.editName
      $scope.projects[i].Status = $scope.editStatus
      $scope.projects[i].StartDate = $scope.editStart
      $scope.projects[i].EndDate = $scope.editEnd
      $scope.projects[i].Contractor = $scope.editContractor
      }
    }
    
    var sourceObj = { 
	    "ID": $scope.editID,
      "Road": $scope.projectRoad,
	    "Name": $scope.editName,
	    "Status": $scope.editStatus,
      "StartDate": $scope.editStart,
      "EndDate": $scope.editEnd,
      "Contractor": $scope.editContractor,
	    "Problems": $scope.currentProblems,
      "Works": $scope.currentWorks,
	    "Comments": $scope.currentComments
    };
    
    $scope.updateProject = $http({
                method: "POST",
                url: updateLink,
                data: sourceObj,
              
            })
            .then(
                function sucessCall(response) {
                    $scope.textFeedback = "Save successful!";

                }, function errorCall(){
                  $scope.textFeedback = "Failed to save";
                }
                  
            );
  }

//-------------DELETE COMMENT FROM LOCAL ONLY  -----------------------------------------------

  $scope.delComment = function() {
      
    var delCommenttt = null;
    
    for (var i = 0; i < $scope.currentComments.length; i++) {
        if ($scope.selected == $scope.currentComments[i].Text) {
                delCommenttt = [{
                  "Author": $scope.currentComments[i].Author,
                  "Text": $scope.currentComments[i].Text
                }];
        }
    }
          
     $scope.delCommentFeedback = " Deleted Successfully!. ";
     $scope.currentComments.pop(delCommenttt);
            
            
            
    }
    

//--------------ADD PROBLEM TO SERVER--------------------------------------------------

  $scope.addProblem = function() {
    var addProblemLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/update.project.json';
     
      var newProblem = {
            "Author": $scope.name,
            "Text": $scope.userComment
        };
        
      for(i =0; i < $scope.projects.length; i++){
        if($scope.projectID == $scope.projects[i].ID){
           $scope.projects[i].Problems.push(newProblem);
        }
        $scope.currentProblems = $scope.projects[i].Problems;
      }
      
        
      var sourceObj = { 
	    "ID": $scope.projectID,
      "Road": $scope.projectRoad,
	    "Name": $scope.projectName,
	    "Status": $scope.projectStatus,
      "StartDate": $scope.projectStartDate,
      "EndDate": $scope.projectEndDate,
      "Contractor": $scope.projectContractor,
	    "Problems": $scope.currentProblems,
      "Works": $scope.currentWorks,
	    "Comments": $scope.currentComments
    };
    
    
         $scope.addNewComment = $http({
                method: "POST",
                url: addProblemLink,
                data: sourceObj,
              
            })
            .then(
                function sucessCall(response) {
                    $scope.textFeedback = "Problem added!";
                     for(i = 0; i < $scope.projects.length; i++){
                        if($scope.projectID == $scope.projects[i].ID){
                          $scope.projects[i].Problems.push(newProblem);
                        }
                     }

                }, function errorCall(){
                  $scope.textFeedback = "Failed to add Problem";
                }
                  
            );
  }




//--------------DELETE PROBLEM FROM LOCALLY -------------------------

  $scope.delProblem = function(){
    var delProb = null;
    
    for (var i = 0; i < $scope.currentProblems.length; i++) {
        if ($scope.selected == $scope.currentProblems[i].Text) {
                delProb = [{
                  "Author": $scope.currentProblems[i].Author,
                  "Text": $scope.currentProblems[i].Text
                }];
        }
    }
          
     $scope.delProblemFeedback = " Deleted Successfully!. ";
     $scope.currentProblems.pop(delProb);
  }





//------------ADD WORKS TO SERVER --------------------------------

  $scope.editWorkInfo = function(){
    var editWorksLink = 'https://track.sim.vuw.ac.nz/api/acbbbb/update.project.json';
     
      var editedWorks = {
            "Type": $scope.editType,
            "SubContractors": $scope.editContractor,
            "Status": $scope.editStatus
        };
        
      for(i =0; i < $scope.projects.length; i++){
        if($scope.projectID == $scope.projects[i].ID){
           $scope.projects[i].Works.push(editedWorks);
        }
        $scope.currentProblems = $scope.projects[i].Problems;
      }
      
        
      var sourceObj = { 
	    "ID": $scope.projectID,
      "Road": $scope.projectRoad,
	    "Name": $scope.projectName,
	    "Status": $scope.projectStatus,
      "StartDate": $scope.projectStartDate,
      "EndDate": $scope.projectEndDate,
      "Contractor": $scope.projectContractor,
	    "Problems": $scope.currentProblems,
      "Works": $scope.currentWorks,
	    "Comments": $scope.currentComments
    };
    
    
         $scope.addNewComment = $http({
                method: "POST",
                url: editWorksLink,
                data: sourceObj,
              
            })
            .then(
                function sucessCall(response) {
                    $scope.addWorksFeedback = "Works added!";
                     for(i = 0; i < $scope.projects.length; i++){
                        if($scope.projectID == $scope.projects[i].ID){
                          $scope.projects[i].Works.push(editedWorks);
                        }
                     }

                }, function errorCall(){
                  $scope.addWorksFeedback = "Failed to add works";
                }
                  
            );
    
  }


//--------------DEL WORKS FROM LOCAL------------------------------------------------

  $scope.delWorks = function(){
    var workDel = null;
    
    for (var i = 0; i < $scope.currentWorks.length; i++) {
        if ($scope.selected == $scope.currentWorks[i].SubContractors) {
                workDel = [{
                  "Type": $scope.currentWorks[i].Type,
                  "SubContractors": $scope.currentWorks[i].SubContractors,
                  "Status": $scope.currentWorks[i].Status
                }];
        }
    }
          
     $scope.delWorksFeedback = " Deleted Successfully!. ";
     $scope.currentWorks.pop(workDel);
  }

//-------------ARCHIVE ROADS--------------------------------------------------------

  $scope.archive = function(){
    var toArchive = null;
    for (var i = 0; i < $scope.roads.length; i++) {
      if ($scope.selected == $scope.roads[i].ID) {
                toArchive = {
                    "ID": $scope.roads[i].ID,
                    "Code": $scope.roads[i].Code,
                    "Type": $scope.roads[i].Type,
                    "Section": $scope.roads[i].Section,
                    "Location": $scope.roads[i].Location,
                    "GPS": $scope.roads[i].GPS
                };
            }
        
      }
      $scope.archivedValues.push(toArchive);
      $scope.roads.pop(toArchive);
      $scope.deleteFeedback = "Archive Successful!";
  }
  
//-------------ARCHIVE PROJECTS--------------------------------------------------------
  
  $scope.arcProject = function(){
    var deleteProjectData = null;
    var deleteComments = null;
    var deleteWorks = null;
    var deleteProblems = null;
    
    for (var i = 0; i < $scope.projects.length; i++) {
            if ($scope.selected == $scope.projects[i].ID) {
              for (z = 0; z < $scope.projects[i].Problems.length; z++) {
                deleteProblems = [{
                  "Author": $scope.projects[i].Problems[z].Author,
                  "Text": $scope.projects[i].Problems[z].Text
                }];
              }
                
                
              for (y = 0; y < $scope.projects[i].Comments.length; y++) {
                deleteComments = [{
                  "Author": $scope.projects[i].Comments[y].Author,
                  "Text": $scope.projects[i].Comments[y].Text
                }];
              }
                
              
              for (x = 0; x < $scope.projects[i].Works.length; x++) {
                deleteWorks = [{
                  "Type": $scope.projects[i].Works[x].Type,
                  "SubContractors": $scope.projects[i].Works[x].SubContractor,
                  "Status": $scope.projects[i].Works[x].Status
                }];
              }
              
                deleteProjectData = {
                    "ID": $scope.projects[i].ID,
                    "Road": $scope.projects[i].Road,
                    "Name": $scope.projects[i].Name,
                    "Status": $scope.projects[i].Status,
                    "StartDate": $scope.projects[i].StartDate,
                    "EndDate": $scope.projects[i].EndDate,
                    "Contractor": $scope.projects[i].Contractor,
                    "Problems": deleteProblems,
                    "Comments": deleteComments,
                    "Works": deleteWorks
                };
            }
        }
      $scope.archivedProjects.push(deleteProjectData);
      $scope.projects.pop(deleteProjectData);
      $scope.deleteProjectFeedback = "Archive Successful!";
  }

//--------------------------------------------------------------------


});
