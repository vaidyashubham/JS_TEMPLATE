let brands = [ { id:1 , name:'Maruthi Suzuki'} ,
                { id:2 , name:'Suzuki NEXA'},
                 { id:3 , name:'Hyndai Motors'}];
let models = [  {id:1,card_id:1,name:'Swift'},
                {id:2,card_id:1,name:'Brezza'},
                {id:3,card_id:1,name:'Dzire'},
                {id:4,card_id:2,name:'Baleno'},
                {id:5,card_id:2,name:'Scross'},
                {id:6,card_id:2,name:'Ignis'},
                {id:7,card_id:3,name:'Grand i20'},
                {id:8,card_id:3,name:'Creta'},
                {id:9,card_id:3,name:'Verna'},
            ];
let colors = [  {id:1,model_id:1,color:'Solid Fire Red'},
                {id:2,model_id:1,color:'Pearl Arctic White'},
                {id:3,model_id:1,color:'Metalic Magma Grey'},
                {id:4,model_id:2,color:'Metalic Silky Silver'},
                {id:5,model_id:2,color:'Pearl Lucent Orange'},
                {id:6,model_id:2,color:'Pearl Midnight Blue'},
                {id:7,model_id:3,color:'Solid Fire Red'},
                {id:8,model_id:3,color:'Pearl Arctic White'},
                {id:9,model_id:3,color:'Metalic Magma Grey'},
                {id:10,model_id:4,color:'Metalic Silky Silver'},
                {id:11,model_id:4,color:'Pearl Lucent Orange'},
                {id:12,model_id:4,color:'Pearl Midnight Blue'},
                {id:13,model_id:5,color:'Solid Fire Red'},
                {id:14,model_id:5,color:'Pearl Arctic White'},
                {id:15,model_id:5,color:'Metalic Magma Grey'},
                {id:16,model_id:6,color:'Metalic Silky Silver'},
                {id:17,model_id:6,color:'Pearl Lucent Orange'},
                {id:18,model_id:6,color:'Pearl Midnight Blue'},
                {id:19,model_id:7,color:'Solid Fire Red'},
                {id:20,model_id:7,color:'Pearl Arctic White'},
                {id:21,model_id:7,color:'Metalic Magma Grey'},
                {id:22,model_id:8,color:'Metalic Silky Silver'},
                {id:23,model_id:8,color:'Pearl Lucent Orange'},
                {id:24,model_id:8,color:'Pearl Midnight Blue'},
                {id:25,model_id:9,color:'Metalic Silky Silver'},
                {id:26,model_id:9,color:'Pearl Lucent Orange'},
                {id:27,model_id:9,color:'Pearl Midnight Blue'}
];


let brandSelect = document.querySelector('#brand-select');
let modalSelect = document.querySelector('#model-select');
let colorSelect = document.querySelector('#color-select');

let brandOptions = '<option value="0">Select a Brand</option>';
brands.forEach((brand) => {
    brandOptions += `<option value="${brand.id}">${brand.name}</option> \n`;
});
brandSelect.innerHTML = brandOptions;

brandSelect.addEventListener('change',function() {
    let modelOptions = '<option value="0">Select a Model</option>';
    let selectedId = Number(brandSelect.value);
    let selectedModels = models.filter((model) => {
        return model.card_id === selectedId;
    });
    selectedModels.forEach((model) => {
        modelOptions += `<option value="${model.id}">${model.name}</option>`
    });
    modalSelect.innerHTML = modelOptions;
});
modalSelect.addEventListener('change',function() {
    let colorOptions = '<option value="0">Select a Color</option>';
    let selectedId = Number(modalSelect.value);
    let selectedColors = colors.filter((color) => {
        return color.model_id === selectedId;
    });
    selectedColors.forEach((color) => {
        colorOptions += `<option value="${color.id}">${color.color}</option>`
    });
    colorSelect.innerHTML = colorOptions;
});