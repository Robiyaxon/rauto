import { useRef } from 'react'
// import { useParams } from 'react-router-dom'
// import { Editor } from '@tinymce/tinymce-react';

function EditCardForm() {
    // const { id } = useParams()
    const marka_id = useRef()
    const model_id = useRef()
    const color_car_id = useRef()
    const year_car_id = useRef()
    const motor_sigimi = useRef()
    const fuel_id = useRef()
    const transmissiya_id = useRef()
    const kuzov_id = useRef()
    const perevod_id = useRef()
    const probeg_id = useRef()
    const page_main_id = useRef()
    const page_title_uz = useRef()
    const page_title_ru = useRef()

    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <div className="page-title-box">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h4>Avtomashinani o'zgartirish</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-avto-body">
                                    <h4 className="mt-0 header-title">Avtomashinani o'zgartirish</h4>
                                    <form autoComplete="off" className="el_form page_form">
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Avtomashina markasini tanlang</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={marka_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">Chevrolet</option>
                                                    <option value="2">Ravon</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Modelini tanlang</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={model_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <optgroup label="Damas">
                                                        <option value="1">Damas DLX</option>
                                                        <option value="2">Damas Labo</option>
                                                    </optgroup>
                                                    <optgroup label="Matiz">
                                                        <option value="3">Matiz</option>
                                                        <option value="4">Matiz Best</option>
                                                    </optgroup>
                                                    <optgroup label="Nexia-2">
                                                        <option value="5">Nexia DOHS</option>
                                                        <option value="6">Nexia SOHS</option>
                                                    </optgroup>
                                                    <optgroup label="Nexia-3">
                                                        <option value="7">Nexia-3 1-??????????????</option>
                                                        <option value="8">Nexia-3 2-??????????????</option>
                                                        <option value="9">Nexia-3 3-??????????????</option>
                                                        <option value="10">Nexia-3 4-??????????????</option>
                                                    </optgroup>
                                                    <optgroup label="Spark">
                                                        <option value="11">Spark 1-??????????????</option>
                                                        <option value="12">Spark 1-???????? ??????????????</option>
                                                        <option value="13">Spark 2-??????????????</option>
                                                        <option value="14">Spark 2-???????? ??????????????</option>
                                                        <option value="15">Spark 3-??????????????</option>
                                                        <option value="16">Spark 3-???????? ??????????????</option>
                                                        <option value="17">Spark 4-??????????????</option>
                                                        <option value="18">Spark 4-???????? ??????????????</option>
                                                    </optgroup>
                                                    <optgroup label="Cobalt">
                                                        <option value="19">Cobalt 1-??????????????</option>
                                                        <option value="20">Cobalt 2-??????????????</option>
                                                        <option value="21">Cobalt 2-???????? ??????????????</option>
                                                        <option value="22">Cobalt 3-??????????????</option>
                                                        <option value="23">Cobalt 4-??????????????</option>
                                                        <option value="24">Cobalt 4-???????? ??????????????</option>
                                                    </optgroup>
                                                    <optgroup label="Lacetti-Gentra">
                                                        <option value="25">Lacetti 1-?? L-COMFORT PLUS</option>
                                                        <option value="26">Lacetti Full CDX A/T Elegant Plus</option>
                                                        <option value="27">Lacetti L-Style MT</option>
                                                        <option value="28">Lacetti L-Style AT</option>
                                                    </optgroup>
                                                    <optgroup label="Malibu-1">
                                                        <option value="29">Malibu-1 1-??????????????</option>
                                                        <option value="30">Malibu-1 2-??????????????</option>
                                                        <option value="31">Malibu-1 3-??????????????</option>
                                                    </optgroup>
                                                    <optgroup label="Malibu-2">
                                                        <option value="32">Malibu-2 1.5L</option>
                                                        <option value="32">Malibu-2 2.0L LTZ</option>
                                                        <option value="33">Malibu-2 2-??????????????</option>
                                                        <option value="34">Malibu-2 3-??????????????</option>
                                                    </optgroup>
                                                    <optgroup label="Tracker-2">
                                                        <option value="35">Tracker-1</option>
                                                        <option value="35">Tracker-2 1.0T LT AT FWD</option>
                                                        <option value="36">Tracker-2 LT AT Redline 1.0L</option>
                                                    </optgroup>
                                                    <optgroup label="Equinox">
                                                        <option value="37">Equinox AT 1LT FWD MH</option>
                                                        <option value="38">Equinox AT 1LT AWD MH</option>
                                                        <option value="39">Equinox AT 3LT AWD MH</option>
                                                    </optgroup>
                                                    <optgroup label="Traverse">
                                                        <option value="40">Traverse ?????????????????? ????????????????????????</option>
                                                        <option value="41">Traverse Premier MY22</option>
                                                    </optgroup>
                                                    <optgroup label="Trailblazer">
                                                        <option value="42">Trailblazer LTZ 6??T</option>
                                                    </optgroup>
                                                    <optgroup label="Tahoe">
                                                        <option value="43">Tahoe ?????????????????? ????????????????????????</option>
                                                        <option value="44">Tahoe RST MY22</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Rangini tanlang</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={color_car_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">?????????? \ Oq</option>
                                                    <option value="1">????????????????-??????????</option>
                                                    <option value="1">?????????? ??????????????????</option>
                                                    <option value="1">?????????? ??????????????</option>
                                                    <option value="1">??????????</option>
                                                    <option value="1">??????????</option>
                                                    <option value="1">????????????</option>
                                                    <option value="1">??????????????</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Ishlab chiqarilgan yili</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={year_car_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">2015</option>
                                                    <option value="1">2016</option>
                                                    <option value="1">2017</option>
                                                    <option value="1">2018</option>
                                                    <option value="1">2019</option>
                                                    <option value="1">2020</option>
                                                    <option value="1">2021</option>
                                                    <option value="1">2022</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Dvigatel sig'imi 'litr'</label>
                                            <div className="col-sm-5" >
                                                <input ref={motor_sigimi} type="text" className="form-control page_title_uz" name="section_title_uz" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Yoqilg'i turi</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={fuel_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">????????????</option>
                                                    <option value="1">??????-????????????</option>
                                                    <option value="1">????????????</option>
                                                    <option value="1">????????????????????</option>
                                                    <option value="1">????????????</option>
                                                    <option value="1">??????</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Transmissiya</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={transmissiya_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">Mexanika</option>
                                                    <option value="1">Avtomat</option>
                                                    <option value="1">Tiptronik</option>
                                                    <option value="1">Variator</option>
                                                    <option value="1">Robot</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Kuzov turi</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={kuzov_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">??????????????????</option>
                                                    <option value="1">??????????????</option>
                                                    <option value="1">??????????</option>
                                                    <option value="1">??????????????????</option>
                                                    <option value="1">????????????</option>
                                                    <option value="1">??????????????</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">????????????</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={perevod_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">????????????????</option>
                                                    <option value="1">????????????</option>
                                                    <option value="1">????????????</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Yurgan masofa / ????????????</label>
                                            <div className="col-sm-5" >
                                                <input ref={probeg_id} type="text" className="form-control page_title_uz" name="section_title_uz" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Bo'lim turini tanlang</label>
                                            <div className="col-sm-5" >
                                                <select name="subCategoryId menu_id" className="main_selector form-control" ref={page_main_id}>
                                                    <option value="0">=Kerak emas=</option>
                                                    <option value="1">Maxsus taklif, Chegirmalar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting o'zbek
                                                tilida</label>
                                            <div className="col-sm-6" >
                                                <input ref={page_title_uz} type="text" className="form-control page_title_uz" name="section_title_uz" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa Sarlavhasini kiriting rus
                                                tilida</label>
                                            <div className="col-sm-6" >
                                                <input ref={page_title_ru} type="text" className="form-control page_title_ru" name="section_title_ru" required />
                                            </div>
                                        </div>
                                        <div className="m-5">
                                            <form enctype="multipart/form-data">
                                                <div className="download">
                                                    <p>Avto rasmini yuklash</p>
                                                </div>

                                                <div className="files">`
                                                    <a href=' '>
                                                        Fayllar
                                                    </a>
                                                </div>
                                                <input type="file" className="file_input_download" />
                                                <div className="max_size">
                                                    <p>Max:100mb</p>
                                                </div>
                                                <div className="upload_button_3">
                                                    <button className="upload_button_file">
                                                        <a href=' '>
                                                            Yuklash
                                                        </a>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="mt-4">
                                            <a href="/api/news/all" className="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                            <button type="submit" className="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditCardForm;
