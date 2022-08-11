
state = JSON.parse(state);
dist = JSON.parse(dist);
hospital = JSON.parse(hospital);
optionerState();
function optionerState() {
    let text = "";
    for (let i = 0; i < state.states.length; i++) {
        text += '<option value="' + state.states[i].state_id + '">' + state.states[i].state_name + '</option>';
    }

    $(".state").append(text);

}
function optionerDist() {
    let text = "";
    for (let i = 0; i < dist.districts.length; i++) {
        text += '<option value="' + dist.districts[i].district_name + '">' + dist.districts[i].district_name + '</option>';
    }

    $(".city").append(text);

}

function populateCenters(dist) {
    $("tbody").html("");
    let text = "";
    for (let i = 0; i < hospital.sessions.length; i++) {
        console.log(hospital.sessions[i].district_name);
        if (hospital.sessions[i].district_name == dist) {
            text += '<tr> <td>' + hospital.sessions[i].name + '</td><td>' + hospital.sessions[i].fee_type + '</td> <td>' + hospital.sessions[i].fee + '</td><td>' + hospital.sessions[i].date + '</td><td>' + hospital.sessions[i].available_capacity + '</td><td>' + hospital.sessions[i].min_age_limit + '</td><td>' + hospital.sessions[i].vaccine + '</td></tr>';
        }
    }

    $("tbody").append(text);
}

$('body').on("change", ".state", function () {
    let value = $(this).val();
    if (value == "34")
        optionerDist();

})
$('body').on("change", ".city", function () {
    let value = $(this).val();
    populateCenters(value);
})



