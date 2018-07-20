angular.module("Admin").controller("ModelCtrl", function ($http, $scope, dataUrl) {
    $scope.data = {};
    $scope.MyModel = {};
    $scope.ShowEdit = true;
    
    //$http.get(dataUrl + '').then(function (data) {
    //    $scope.data.MyModel = data.data;
    //}), function (error) {
    //    $scope.data.error = error;
    //};
    
    //test data
    $scope.data.MyModel = [{}]
    
    $scope.GetAllModels = function(){
        //$http({
        //    method: "get",
        //    url: dataUrl + ""
        //}).then(function (response) {
        //    $scope.data.Users = response.data;
        //}, function () {
        //    alert("Error Occur");
        //})
    }
    
    $scope.SetupModel = function(model){
        $scope.MyModel = model;
        
        $scope.ShowEdit = true;
        angular.element("#modelModal").modal('show');
    }
    
    $scope.NewModel = function(){
        $scope.MyModel.ModelID = -1;
        
        $scope.ShowEdit = true;
        angular.element("#modelModal").modal('show');
    }
    
    $scope.SaveModel = function(model){
        
        //$http({
        //    method: "post",
        //    url: dataUrl + "",
        //    datatype: "json",
        //    data: JSON.stringify(model)
        //}).then(function (response) {
        //    if (response.data == '') {
        //        alert('Success!');

        //        angular.element('#modelModal').modal("hide");
        //    } else {
        //        alert(response.data);
        //    }
            
        //    $scope.GetAllModels();
        //})
    }
    
    $scope.DeleteModel = function(model){
        $scope.MyModel = model;
        
        $scope.ShowEdit = false;
        angular.element("#modelModal").modal('show');
    }
    
    $scope.ConfirmDelete = function(){
        
        //$http({
        //    method: "post",
        //    url: dataUrl + "",
        //    datatype: "json",
        //    data: JSON.stringify({ modelID: $scope.MyModel.ModelID })
        //}).then(function (response) {
        //    if (response.data != '') {
        //        alert(response.data);
        //    }
        //    else {
        //        alert('Success.');
        //        $scope.GetAllModels();
        //        angular.element('#modelModal').modal("hide");
        //    }
        //})
    }
});