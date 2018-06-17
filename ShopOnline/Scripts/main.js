
//Create

function createShop() {
    debugger;
    var $buttonClicked = $(this);
    var postData = {};
    postData.Name = $("#Name").val();
    postData.Adress = $("#Adress").val();


    $.ajax({
        type: "POST",
        url: '/Shops/Create',
        datatype: 'json',
        data: postData,
        success: function (data) {
            debugger;
            if (data == false) {
                alert("Failed to create a Shop");
                return;
            }

            //$('#myModalContent').html(data);
            $.ajax({
                type: "GET",
                url: '/Shops/Index',
                success: function (partialView) {
                    debugger;
                    //$('#myModalContent').html(data);
                    $("#shops-container").html(partialView)



                },
                error: function () {
                    alert("Dynamic content load failed.");
                }
            });

            $('#myModal').modal('hide')


        },
        error: function () {
            alert("Dynamic content load failed.");
        }
    });

};


var TeamDetailPostBackURL = '/Shops/Create';
$(function () {
    $(".create").click(function () {
        debugger;
        var $buttonClicked = $(this);

        $.ajax({
            type: "GET",
            url: TeamDetailPostBackURL,
            contentType: "application/json; charset=utf-8",

            datatype: "json",
            success: function (data) {
                debugger;
                $('#myModalContent').html(data);

                $('#myModal').modal('show');

            },
            error: function () {
                alert("Dynamic content load failed.");
            }
        });
    });

});




//Edit 

$(function () {
    $(".edit").click(function () {
        debugger;
        var $buttonClicked = $(this);
        var id = $buttonClicked.attr('data-id');

        $.ajax({
            type: "GET",
            url: '/Shops/Edit',
            contentType: "application/json; charset=utf-8",
            data: { "Id": id },
            datatype: "json",
            success: function (data) {
                debugger;
                $('#myModalContent').html(data);

                $('#myModal').modal('show');

            },
            error: function () {
                alert("Dynamic content load failed.");
            }
        });
    });

});

function editShop() {
    debugger;
    var $buttonClicked = $(this);
    var postData = {};
    postData.Name = $("#Name").val();
    postData.Adress = $("#Adress").val();
    postData.Id = $("#Id").val();


    $.ajax({
        type: "POST",
        url: '/Shops/Edit',
        datatype: 'json',
        data: postData,
        success: function (data) {
            debugger;
            if (data == false) {
                alert("Failed to create a Shop");
                return;
            }

            //$('#myModalContent').html(data);
            $.ajax({
                type: "GET",
                url: '/Shops/Index',
                success: function (partialView) {
                    debugger;
                    //$('#myModalContent').html(data);
                    $("#shops-container").html(partialView)
                },
                error: function () {
                    alert("Dynamic content load failed.");
                }

            });
            $('#myModal').modal('hide')
        },
        error: function () {
            alert("Dynamic2 content load failed.");
        }
    });
};


//Delete

$(function () {
    $(".delete").click(function () {
        debugger;
        var $buttonClicked = $(this);
        var id = $buttonClicked.attr('data-id');

        $.ajax({
            type: "GET",
            url: '/Shops/Delete',
            contentType: "application/json; charset=utf-8",
            data: { "Id": id },
            datatype: "json",
            success: function (data) {
                debugger;
                $('#myModalContent').html(data);

                $('#myModal').modal('show');

            },
            error: function () {
                alert("Dynamic content load failed.");
            }
        });
    });
    //$("#closebtn").on('click',function(){
    //    $('#myModal').modal('hide');

    $("#closbtn").click(function () {
        $('#myModal').modal('hide');
    });
});



function deleteShop() {
    debugger;
    var $buttonClicked = $(this);
    var postData = {};
    postData.Name = $("#Name").val();
    postData.Adress = $("#Adress").val();
    postData.Id = $("#Id").val();


    $.ajax({
        type: "POST",
        url: '/Shops/Delete',
        datatype: 'json',
        data: postData,
        success: function (data) {
            debugger;
            if (data == false) {
                alert("Failed to create a Shop");
                return;
            }

            //$('#myModalContent').html(data);
            $.ajax({
                type: "GET",
                url: '/Shops/Index',
                success: function (partialView) {
                    debugger;
                    //$('#myModalContent').html(data);
                    $("#shops-container").html(partialView)
                },
                error: function () {
                    alert("Dynamic content load failed.");
                }

            });
            $('#myModal').modal('hide')
        },
        error: function () {
            alert("Dynamic2 content load failed.");
        }
    });
};


//Items

//Create

function createItem() {
    debugger;
    var $buttonClicked = $(this);
    var postData = {};
   
    postData.Name = $("#Name").val();
    postData.Specification = $("#Specification").val();
    postData.Price = $("#Price").val();
    postData.ShopId = $("#ShopId").val();


    $.ajax({
        type: "POST",
        url: '/Items/Create',
        datatype: 'json',
        data: postData,
        success: function (data) {
            debugger;
            if (data == false) {
                alert("Failed to create a Shop");
                return;
            }

            //$('#myModalContent').html(data);
            $.ajax({
                type: "GET",
                url: '/Items/Index',
                success: function (partialView) {
                    debugger;
                    //$('#myModalContent').html(data);
                    $("#shops-container").html(partialView)



                },
                error: function () {
                    alert("Dynamic2 content load failed.");
                }
            });

            $('#myModal').modal('hide')


        },
        error: function () {
            alert("Dynamic content load failed.");
        }
    });

};



$(function () {
    $(".createItem").click(function () {
        debugger;
        var $buttonClicked = $(this);

        $.ajax({
            type: "GET",
            url: '/Items/Create',
            contentType: "application/json; charset=utf-8",

            datatype: "json",
            success: function (data) {
                debugger;
                $('#myModalContent').html(data);

                $('#myModal').modal('show');

            },
            error: function () {
                alert("Dynamic content load failed.");
            }
        });
    });

});


//Delete

$(function () {
    $(".deleteItem").click(function () {
        debugger;
        var $buttonClicked = $(this);
        var id = $buttonClicked.attr('data-id');

        $.ajax({
            type: "GET",
            url: '/Items/Delete',
            contentType: "application/json; charset=utf-8",
            data: { "Id": id },
            datatype: "json",
            success: function (data) {
                debugger;
                $('#myModalContent').html(data);

                $('#myModal').modal('show');

            },
            error: function () {
                alert("Dynamic content load failed.");
            }
        });
    });
    //$("#closebtn").on('click',function(){
    //    $('#myModal').modal('hide');

    $("#closbtn").click(function () {
        $('#myModal').modal('hide');
    });
});



function deleteItem() {
    debugger;
    var $buttonClicked = $(this);
    var postData = {};
    postData.Name = $("#Name").val();
    postData.Specification = $("#Specification").val();
    postData.Price = $("#Price").val();
    postData.ShopId = $("#ShopId").val();
    postData.Id = $("#Id").val();


    $.ajax({
        type: "POST",
        url: '/Items/Delete',
        datatype: 'json',
        data: postData,
        success: function (data) {
            debugger;
            if (data == false) {
                alert("Failed to create a Shop");
                return;
            }

            //$('#myModalContent').html(data);
            $.ajax({
                type: "GET",
                url: '/Items/Index',
                success: function (partialView) {
                    debugger;
                    //$('#myModalContent').html(data);
                    $("#shops-container").html(partialView)
                },
                error: function () {
                    alert("Dynamic content load failed.");
                }

            });
            $('#myModal').modal('hide')
        },
        error: function () {
            alert("Dynamic2 content load failed.");
        }
    });
};


//Edit

$(function () {
    $(".editItem").click(function () {
        debugger;
        var $buttonClicked = $(this);
        var id = $buttonClicked.attr('data-id');

        $.ajax({
            type: "GET",
            url: '/Items/Edit',
            contentType: "application/json; charset=utf-8",
            data: { "Id": id },
            datatype: "json",
            success: function (data) {
                debugger;
                $('#myModalContent').html(data);

                $('#myModal').modal('show');

            },
            error: function () {
                alert("Dynamic content load failed.");
            }
        });
    });
    //$("#closebtn").on('click',function(){
    //    $('#myModal').modal('hide');

    $("#closbtn").click(function () {
        $('#myModal').modal('hide');
    });
});



function editItem() {
    debugger;
    var $buttonClicked = $(this);
    var postData = {};
    postData.Name = $("#Name").val();
    postData.Specification = $("#Specification").val();
    postData.Price = $("#Price").val();
    postData.ShopId = $("#ShopId").val();
    postData.Id = $("#Id").val();


    $.ajax({
        type: "POST",
        url: '/Items/Edit',
        datatype: 'json',
        data: postData,
        success: function (data) {
            debugger;
            if (data == false) {
                alert("Failed to create a Shop");
                return;
            }

            //$('#myModalContent').html(data);
            $.ajax({
                type: "GET",
                url: '/Items/Index',
                success: function (partialView) {
                    debugger;
                    //$('#myModalContent').html(data);
                    $("#shops-container").html(partialView)
                },
                error: function () {
                    alert("Dynamic content load failed.");
                }

            });
            $('#myModal').modal('hide')
        },
        error: function () {
            alert("Dynamic2 content load failed.");
        }
    });
};