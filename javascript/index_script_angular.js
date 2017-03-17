app.controller("formController", function($scope) {

    $scope.notes = [];
    note_counter = 0;

    $scope.showNote = function() {
        console.log($scope.entry_title);
        console.log($scope.entry_desc);
    };


    $scope.addNote = function() {
        $scope.notes.push({title: $scope.entry_title, desc: $scope.entry_desc });
        note_counter += 1;


    };

}
