import Navbar from "../components/Navbar";
import styles from "../styles/Colorpalette.module.css";

export default function ColorPalette(){
  return(
    <div>
        <header>
            <Navbar />
        </header>
        <div className={styles.ColorPalette}>
            <div className={styles.c_container}>
                <div className="c_row mt_5">
                    <div className={styles.ColorPalette__headline}>
                        <h6>Primary List</h6>
                    </div>
                    <div className={styles.ColorPalette__listWrapper}>
                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__PrimarylistBox} ${styles.Primary_0} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#6E2665</span>
                                <p>Primary 0</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__PrimarylistBox} ${styles.Primary_1}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#953389</span>
                                <p>Primary 1</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__PrimarylistBox} ${styles.Primary_2}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#B758AB</span>
                                <p>Primary 2</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__PrimarylistBox} ${styles.Primary_3}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#FFD6FA</span>
                                <p>Primary 3</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__PrimarylistBox} ${styles.Primary_4}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#FAECF9</span>
                                <p>Primary 4</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__PrimarylistBox} ${styles.Primary_5}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#FCF8FC</span>
                                <p>Primary 5</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c_row mt_5">
                    <div className={styles.ColorPalette__headline}>
                        <h6>Text List</h6>
                    </div>
                    <div className={styles.ColorPalette__listWrapper}>
                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Dark}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#372741</span>
                                <p>Dark</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.MediumDark} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#503D5C</span>
                                <p>Medium Dark</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Medium} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#836F90</span>
                                <p>Medium</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.LightMedium} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#CCC6CF</span>
                                <p>Light Medium</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Light} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#F3F1F3</span>
                                <p>Light</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c_row mt_5">
                    <div className={styles.ColorPalette__headline}>
                        <h6>Secondary List</h6>
                    </div>
                    <div className={styles.ColorPalette__listWrapper}>
                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Secondary_1} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#FFAD37</span>
                                <p>Secondary 1</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Secondary_2} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#D3D7F9</span>
                                <p>Secondary 2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c_row mt_5">
                    <div className={styles.ColorPalette__headline}>
                        <h6>Accents List</h6>
                    </div>
                    <div className={styles.ColorPalette__listWrapper}>
                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Pink} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#FAECF9</span>
                                <p>Pink</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Green} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#E4F2E5</span>
                                <p>Green</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Cream} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#FDEBD4</span>
                                <p>Cream</p>
                            </div>
                        </div>

                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Lilac} `}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#EAE6FC</span>
                                <p>Lilac</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c_row mt_5">
                    <div className={styles.ColorPalette__headline}>
                        <h6>Utility List</h6>
                    </div>
                    <div className={styles.ColorPalette__listWrapper}>
                        <div className={styles.ColorPalette__section}>
                            <div className={` ${styles.ColorPalette__TextListBox} ${styles.Success}`}></div>
                            <div className={styles.ColorPalette__listContent}>
                                <span>#4BB543</span>
                                <p>Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
  