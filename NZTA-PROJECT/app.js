var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {

    //---------VIEW TYPES ----------------------
    $scope.showRoad = false;
    $scope.searchVisable = false;
    $scope.showUpdates = true;
    $scope.navVisable = true;
    $scope.loginVisable = false;
    $scope.projectVisable = false;
    $scope.showProjectRoad = false;
    $scope.name = "Jennifer Lawrence";
    $scope.showAddRoad = false;
    $scope.showDeleteRoad = false;
    $scope.showDeleteProject = false;
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

    }

    $scope.showLogOut = function() {
        $scope.showUpdates = $scope.showUpdates = false;
        $scope.searchVisable = $scope.searchVisable = false;
        $scope.showRoad = $scope.showRoad = false;
        $scope.projectVisable = $scope.projectVisable = false;
        $scope.loginVisable = $scope.loginVisable = true;
        $scope.navVisable = $scope.navVisable = false;
        $scope.feedback = "";
        $scope.showProjectRoad = false
        $scope.showAddRoad = false;
        $scope.showDeleteRoad = false;
        $scope.addProject = false;
        $scope.showDeleteProject = false;
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


        for (i = 0; i < $scope.projects.length; i++) {
            if ($scope.projects[i] == x) {
                $scope.projectID = $scope.projects[i].ID;
                $scope.projectRoad = $scope.projects[i].Road;
                $scope.projectName = $scope.projects[i].Name;
                $scope.projectStatus = $scope.projects[i].Status;
                $scope.projectStartDate = $scope.projects[i].StartDate;
                $scope.projectEndDate = $scope.projects[i].EndDate;
                $scope.projectContractor = $scope.projects[i].Contractor;
                for (j = 0; j < $scope.projects[i].Problems.length; j++) {
                    $scope.projectProblemsAuthor = $scope.projects[i].Problems[j].Author;
                    $scope.projectProblemsText = $scope.projects[i].Problems[j].Text;
                }
                for (v = 0; v < $scope.projects[i].Works.length; v++) {
                    $scope.projectWorksType = $scope.projects[i].Works[v].Type;
                    $scope.projectWorksSubContractors = $scope.projects[i].Works[v].SubContractors;
                    $scope.projectWorksStatus = $scope.projects[i].Works[v].Status;
                }

                for (b = 0; b < $scope.projects[i].Comments.length; b++) {
                    $scope.projectCommentsAuthor = $scope.projects[i].Comments[b].Author;
                    $scope.projectCommentsText = $scope.projects[i].Comments[b].Text;
                }

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
        $scope.showDeleteProject = true;
        $scope.showAddProject = true;
        $scope.showDeleteProject = false;
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

        //let inspector = "inspecter"
        for (i = 0; i < $scope.logins.length; i++) {
            if ($scope.logins[i].LoginName == $scope.loginUsername && $scope.logins[i].Password == $scope.loginPassword) {
                /*if($scope.logins[i].UserType == inspector){
                   $scope.loginVisable = $scope.loginVisable = false;
                    $scope.navVisableContractor = true;
                     $scope.loginVisable = $scope.loginVisable = false;
                }*/
                $scope.loginVisable = $scope.loginVisable = false;
                $scope.navVisable = $scope.navVisable = true;
                $scope.name = $scope.loginUsername.toUpperCase();
                $scope.showUpdates = true;
            } else {
                $scope.feedback = "Invalid password or username.";
            }
        }
    }

    //----------------GET ROAD INFO FROM HTTPGET---------------------

    $scope.roadCall = $http.get('https://track.sim.vuw.ac.nz/api/aaa/road_dir.json')
        .then(
            function successCall(response) {
                $scope.roads = response.data.Roads;
            },
        );

    //-----------GET PROJECT INFO FROM HTTPGET -------------------------------

    $scope.projectCall = $http.get('https://track.sim.vuw.ac.nz/api/bbbb/project_dir.json')
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
    var addLink = 'https://track.sim.vuw.ac.nz/api/aaa/update.road.json';

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
        var deleteLink = 'https://track.sim.vuw.ac.nz/api/aaa/delete.road.' + $scope.selected + '.json';
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
    var addProjectLink = 'https://track.sim.vuw.ac.nz/api/bbbb/update.project.json';

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
    var deleteProjectLink = 'https://track.sim.vuw.ac.nz/api/bbbb/delete.project.' + $scope.selected + '.json';
    var deleteProjectData = null;
    var deleteComments = null;
    var deleteWorks = null;
    var deleteProblems = null;
    
    /*for (var j = 0; j < $scope.projects.length; j++) {
            /*if ($scope.selected == $scope.projects[j].ID) {
              for (z = 0; z < $scope.projects[j].Problems.length; z++) {
              deleteComments = {
                  "Author": $scope.projects[j].Comments[z].Author,
                  "Text": $scope.projects[j].Comments[z].Text
                };
            }
            }
    }**/
    
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




//-----------------------DOESNT WORK ----------------------------------------
    $scope.addComment = function() {
      var addCommentLink = 'https://track.sim.vuw.ac.nz/api/bbbb/update.project.json';
      
      var newComment = {
            "Author": $scope.name,
            "Text": $scope.userComment
        };
        
         
         $scope.addNewComment = $http({
                method: "POST",
                url: addCommentLink,
                data: newComment,
              
            })
            .then(
                function sucessCall(response) {
                    $scope.projectFeedback = "Road project successfully!. ";
                    //$scope.projects.push(newProjectData);

                }, function errorCall(){
                  $scope.projectFeedback = "Failed to add project";
                }
                  
            );
              
      }
//---------------------------------------------------------------
    $scope.editProject = function() {
      
    }
//---------------------------------------------------------------


});