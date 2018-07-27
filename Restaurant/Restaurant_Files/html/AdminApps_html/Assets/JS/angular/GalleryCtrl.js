angular.module("Admin").controller("GalleryCtrl", function ($http, $scope, dataUrl) {
    $scope.data = {};
    $scope.RestGallery = {};
    $scope.DeleteMessage;
    $scope.ShowInfo;
    $scope.selectedPage = 1;
    $scope.pageSize = 1;
    
    $scope.data = {
        Gallery: [{Image: '', IsPublic: 'true', Date:'01/01/2018'},
                  {Image: '', IsPublic: 'false', Date:'08/01/2017'},
                  {Image: '', IsPublic: 'true', Date:'01/01/2018'},
                  {Image: '', IsPublic: 'false', Date:'08/01/2017'},
                  {Image: '', IsPublic: 'false', Date:'10/01/2017'}]
    };
    
    $scope.range = function(){
        let result = [];
        let index = ($scope.selectedPage * $scope.pageSize) - $scope.pageSize;
        let end = index + $scope.pageSize;
        
        for(let i = index; i < end; i++){
           result.push($scope.data.Gallery[i]);
        }
        
        return result;
    }
    
    $scope.pageCount = function(){
        let result = [];
        for(let i = 0; i < Math.ceil($scope.data.Gallery.length / $scope.pageSize); i++){
            result.push(i);
        }
        return result;
    }
    
    $scope.selectPage = function(newPage){
        $scope.selectedPage = newPage;
    }
    
    $scope.DeleteGal = function(gallery){
        $scope.RestGallery = gallery;
        angular.element("#galleryModal").modal('show');
        
        $scope.ShowInfo = false;
        $scope.DeleteMessage = 'Are you sure you want to delete image created on ' + gallery.Date + '?';
    }
    
    $scope.ConfirmDelete = function(){
        angular.element("#galleryModal").modal('hide');
    }
});