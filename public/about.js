(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CitaTechAreasCarousel",
  props: ["items"],
  data: function data() {
    return {
      projects: this.items
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Areas.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_components_CitaLogoBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/CitaLogoBar */ "./resources/js/components/CitaLogoBar.vue");
/* harmony import */ var _js_components_CitaNavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/CitaNavigationBar */ "./resources/js/components/CitaNavigationBar.vue");
/* harmony import */ var _js_components_CitaTechAreasCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/CitaTechAreasCarousel */ "./resources/js/components/CitaTechAreasCarousel.vue");
/* harmony import */ var _js_components_CitaTechPageBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/CitaTechPageBackground */ "./resources/js/components/CitaTechPageBackground.vue");
/* harmony import */ var _js_components_CitaTechEquipmentCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/CitaTechEquipmentCard */ "./resources/js/components/CitaTechEquipmentCard.vue");
/* harmony import */ var _js_components_CitaTechFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/components/CitaTechFooter */ "./resources/js/components/CitaTechFooter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "areas",
  computed: {
    citaTechMainContainerClass: function citaTechMainContainerClass() {
      return "citaTechMainContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechNavigationContainerClass: function citaTechNavigationContainerClass() {
      return "citaTechNavigationContainer" + this.$vuetify.breakpoint.name;
    },
    citaPageBackgroundClass: function citaPageBackgroundClass() {
      return "citaPageBackground" + this.$vuetify.breakpoint.name;
    },
    citaPageDescriptionClass: function citaPageDescriptionClass() {
      return "citaPageDescription" + this.$vuetify.breakpoint.name;
    },
    citaTechFooterContainerClass: function citaTechFooterContainerClass() {
      return "citaTechFooterContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechFeaturedEquipmentContainerClass: function citaTechFeaturedEquipmentContainerClass() {
      return "citaTechFeaturedEquipmentContainer" + this.$vuetify.breakpoint.name;
    },
    citaTechAreasCarouselClass: function citaTechAreasCarouselClass() {
      return "citaTechAreasCarousel" + this.$vuetify.breakpoint.name;
    }
  },
  data: function data() {
    return {
      equipments: [{
        equipmentID: 1,
        equipmentName: "Nivel de ingeniero",
        equipmentImgSrc: "nivel_ingeniero.png",
        equipmentType: "topography",
        equipmentDescription: "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
      }, {
        equipmentID: 2,
        equipmentName: "Laser Scanner",
        equipmentImgSrc: "laser_scanner.png",
        equipmentType: "topography",
        equipmentDescription: "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
      }, {
        equipmentID: 3,
        equipmentName: "Estación Total",
        equipmentImgSrc: "estacion_total.png",
        equipmentType: "topography",
        equipmentDescription: "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
      }, {
        equipmentID: 4,
        equipmentName: "Nivel de ingeniero",
        equipmentImgSrc: "nivel_ingeniero.png",
        equipmentType: "topography",
        equipmentDescription: "Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio Equipo para realizar levantamientos 3D de cualquier zona de estudio"
      }],
      carouselItems: [{
        id: 1,
        imgSrc: "areas_carousel_img_1.png",
        title: "Levantamiento 3D en Tipon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit imperdiet enim tempor ornare. Aenean porttitor enim non pellentesque semper. Integer vehicula, erat ac elementum aliquet, leo massa tincidunt tellus, a pharetra erat enim in lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, arcu quis porttitor egestas, dui augue gravida nibh, vel tristique nulla nisi id nulla. Curabitur et ipsum tincidunt, bibendum nibh ut, gravida nibh. Praesent maximus, tellus eu sodales suscipit, nulla mauris mollis mauris, quis viverra diam euismod, dui et aliquam porta, ipsum nisi euismod arcu,bulum leo",
        equipments: [{
          id: 1,
          name: "Nivel de ingeniero"
        }, {
          id: 2,
          name: "Laser Scanner"
        }, {
          id: 3,
          name: "Estacion Total"
        }]
      }, {
        id: 2,
        imgSrc: "areas_carousel_img_2.png",
        title: "Levantamiento 3D en Tipon 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit imperdiet enim tempor ornare. Aenean porttitor enim non pellentesque semper. Integer vehicula, erat ac elementum aliquet, leo massa tincidunt tellus, a pharetra erat enim in lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, arcu quis porttitor egestas, dui augue gravida nibh, vel tristique nulla nisi id nulla. Curabitur et ipsum tincidunt, bibendum nibh ut, gravida nibh. Praesent maximus, tellus eu sodales suscipit, nulla mauris mollis mauris, quis viverra diam euismod, dui et aliquam porta, ipsum nisi euismod arcu,bulum leo",
        equipments: [{
          id: 1,
          name: "Nivel de ingeniero"
        }, {
          id: 2,
          name: "Laser Scanner"
        }, {
          id: 3,
          name: "Estacion Total"
        }]
      }, {
        id: 3,
        imgSrc: "areas_carousel_img_3.png",
        title: "Levantamiento 3D en Tipon 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit imperdiet enim tempor ornare. Aenean porttitor enim non pellentesque semper. Integer vehicula, erat ac elementum aliquet, leo massa tincidunt tellus, a pharetra erat enim in lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempus, arcu quis porttitor egestas, dui augue gravida nibh, vel tristique nulla nisi id nulla. Curabitur et ipsum tincidunt, bibendum nibh ut, gravida nibh. Praesent maximus, tellus eu sodales suscipit, nulla mauris mollis mauris, quis viverra diam euismod, dui et aliquam porta, ipsum nisi euismod arcu,bulum leo",
        equipments: [{
          id: 1,
          name: "Nivel de ingeniero"
        }, {
          id: 2,
          name: "Laser Scanner"
        }, {
          id: 3,
          name: "Estacion Total"
        }]
      }]
    };
  },
  components: {
    CitaLogoBar: _js_components_CitaLogoBar__WEBPACK_IMPORTED_MODULE_0__["default"],
    CitaNavigationBar: _js_components_CitaNavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    CitaTechPageBackground: _js_components_CitaTechPageBackground__WEBPACK_IMPORTED_MODULE_3__["default"],
    CitaTechAreasCarousel: _js_components_CitaTechAreasCarousel__WEBPACK_IMPORTED_MODULE_2__["default"],
    CitaTechEquipmentCard: _js_components_CitaTechEquipmentCard__WEBPACK_IMPORTED_MODULE_4__["default"],
    CitaTechFooter: _js_components_CitaTechFooter__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.topographyButtons[data-v-262f8122] {\n  background-color: #f3cb58 !important;\n  border-radius: 10px !important;\n}\n/* .carouselDescription {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.citaTechMainContainerlg[data-v-747b34f7] {\n  padding-top: 25px !important;\n  padding-bottom: 25px !important;\n  padding-left: 200px !important;\n  padding-right: 0px !important;\n  background-color: white;\n}\n.citaTechMainContainerxs[data-v-747b34f7] {\n  padding-bottom: 20px !important;\n  padding-left: 20px !important;\n  padding-right: 0px !important;\n  background-color: transparent;\n}\n.citaTechNavigationContainerlg[data-v-747b34f7] {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-right: 200px !important;\n  background-color: #424040;\n}\n.citaTechFeaturedEquipmentContainerlg[data-v-747b34f7] {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-right: 200px !important;\n  background-color: #f8f8f8;\n}\n.citaTechFooterContainerlg[data-v-747b34f7] {\n  padding-top: 20px !important;\n  padding-bottom: 20px !important;\n  padding-right: 200px !important;\n  background-color: #dddddd;\n}\n.citaPageBackgroundlg[data-v-747b34f7] {\n  margin-top: 100px !important;\n  background-color: transparent;\n}\n.citaPageDescriptionlg[data-v-747b34f7] {\n  margin-top: 15px !important;\n  background-color: white;\n}\n.v-parallax__content[data-v-747b34f7] {\n  padding: 0px !important;\n}\n.moreEquipmentButton[data-v-747b34f7] {\n  color: white !important;\n  background-color: #424040;\n}\n.citaTechAreasCarousellg[data-v-747b34f7] {\n  padding-top: 0px !important;\n  padding-bottom: 20px !important;\n  padding-right: 130px !important;\n  margin-top: 15px !important;\n  background-color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-carousel",
    {
      attrs: {
        light: "",
        "hide-delimiter-background": "",
        "hide-delimiters": false,
        "show-arrows": false
      }
    },
    _vm._l(_vm.projects, function(project) {
      return _c(
        "v-carousel-item",
        { key: project.id },
        [
          _c(
            "v-layout",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-layout", [
                        _c(
                          "div",
                          {
                            staticClass: "title font-weight-regular mb-2 mt-4"
                          },
                          [_vm._v(_vm._s(project.title))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-layout", [
                        _c(
                          "div",
                          {
                            staticClass: "subtitle-2 font-weight-regular my-3"
                          },
                          [_vm._v(_vm._s(project.description))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-layout", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "subtitle-2 font-weight-regular mt-1 mb-3"
                          },
                          [_vm._v("Equipos utilizados:")]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "v-flex",
                            _vm._l(project.equipments, function(usedEquipment) {
                              return _c(
                                "v-btn",
                                {
                                  key: usedEquipment.name + usedEquipment.id,
                                  staticClass:
                                    "mr-4 px-3 font-weigth-regular white--text text-none topographyButtons",
                                  attrs: { text: "", dark: "" }
                                },
                                [_vm._v(_vm._s(usedEquipment.name))]
                              )
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6" } },
                    [
                      _c("v-img", {
                        attrs: {
                          contain: "",
                          height: "370",
                          src: "/img/" + project.imgSrc
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=template&id=747b34f7&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Areas.vue?vue&type=template&id=747b34f7&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _c(
        "v-container",
        { class: [_vm.citaTechMainContainerClass], attrs: { fluid: "" } },
        [_c("cita-logo-bar")],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        {
          class: [
            _vm.citaTechMainContainerClass,
            _vm.citaTechNavigationContainerClass
          ],
          attrs: { fluid: "" }
        },
        [_c("cita-navigation-bar")],
        1
      ),
      _vm._v(" "),
      _c(
        "v-parallax",
        { attrs: { src: "/img/areas_background.png", height: "400" } },
        [
          _c(
            "v-container",
            {
              class: [
                _vm.citaTechMainContainerClass,
                _vm.citaPageBackgroundClass
              ],
              attrs: { fluid: "" }
            },
            [_c("cita-tech-page-background")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        {
          class: [
            _vm.citaTechMainContainerClass,
            _vm.citaTechAreasCarouselClass
          ],
          attrs: { fluid: "" }
        },
        [
          _c("v-layout", [
            _c(
              "div",
              { staticClass: "headline font-weight-regular mb-4 mt-8" },
              [_vm._v("Proyectos realizados con estos equipos")]
            )
          ]),
          _vm._v(" "),
          _c(
            "v-layout",
            [
              _c("cita-tech-areas-carousel", {
                attrs: { items: _vm.carouselItems }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        {
          class: [
            _vm.citaTechMainContainerClass,
            _vm.citaTechFeaturedEquipmentContainerClass
          ],
          attrs: { fluid: "" }
        },
        [
          _c(
            "v-layout",
            [
              _c("v-flex", [
                _c(
                  "div",
                  {
                    staticClass: "headline font-weight-regular mb-8",
                    staticStyle: { "margin-top": "60px" }
                  },
                  [_vm._v("Equipos de topografía")]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            [
              _c(
                "v-row",
                _vm._l(_vm.equipments, function(equipment) {
                  return _c(
                    "v-col",
                    { key: equipment.equipmentID, attrs: { cols: "3" } },
                    [
                      _c("cita-tech-equipment-card", {
                        attrs: {
                          name: equipment.equipmentName,
                          "img-src": equipment.equipmentImgSrc,
                          type: equipment.equipmentType,
                          description: equipment.equipmentDescription
                        }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              staticClass: "mb-8",
              attrs: { "align-content-center": "", "justify-center": "" }
            },
            [
              _c(
                "v-btn",
                {
                  staticClass: "text-none my-12 moreEquipmentButton",
                  attrs: { text: "" }
                },
                [_vm._v("Ver más equipos CITA")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        {
          class: [
            _vm.citaTechMainContainerClass,
            _vm.citaTechFooterContainerClass
          ],
          attrs: { fluid: "" }
        },
        [_c("cita-tech-footer")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CitaTechAreasCarousel.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/CitaTechAreasCarousel.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CitaTechAreasCarousel_vue_vue_type_template_id_262f8122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true& */ "./resources/js/components/CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true&");
/* harmony import */ var _CitaTechAreasCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CitaTechAreasCarousel.vue?vue&type=script&lang=js& */ "./resources/js/components/CitaTechAreasCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css& */ "./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CitaTechAreasCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CitaTechAreasCarousel_vue_vue_type_template_id_262f8122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CitaTechAreasCarousel_vue_vue_type_template_id_262f8122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "262f8122",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CitaTechAreasCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CitaTechAreasCarousel.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/CitaTechAreasCarousel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CitaTechAreasCarousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=style&index=0&id=262f8122&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_style_index_0_id_262f8122_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_template_id_262f8122_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CitaTechAreasCarousel.vue?vue&type=template&id=262f8122&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_template_id_262f8122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CitaTechAreasCarousel_vue_vue_type_template_id_262f8122_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Areas.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Areas.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Areas_vue_vue_type_template_id_747b34f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Areas.vue?vue&type=template&id=747b34f7&scoped=true& */ "./resources/js/views/Areas.vue?vue&type=template&id=747b34f7&scoped=true&");
/* harmony import */ var _Areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Areas.vue?vue&type=script&lang=js& */ "./resources/js/views/Areas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css& */ "./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Areas_vue_vue_type_template_id_747b34f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Areas_vue_vue_type_template_id_747b34f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "747b34f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Areas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Areas.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Areas.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Areas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=style&index=0&id=747b34f7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_style_index_0_id_747b34f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Areas.vue?vue&type=template&id=747b34f7&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Areas.vue?vue&type=template&id=747b34f7&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_template_id_747b34f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Areas.vue?vue&type=template&id=747b34f7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Areas.vue?vue&type=template&id=747b34f7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_template_id_747b34f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Areas_vue_vue_type_template_id_747b34f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);