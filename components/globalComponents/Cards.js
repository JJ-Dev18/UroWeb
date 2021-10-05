import styles from '../../styles/Card.module.css'

const Card = () => {
  return (
    <div className={styles.wrapper}>
      {/* <!-- *** fut-player-card ***--> */}
      <div className={styles.fut_player_card}>
        {/* <!-- Player Card Top--> */}
        <div className={styles.player_card_top}>
          <div className={styles.player_master_info}>
            <div className={styles.player_rating}>
              <span>97</span>
            </div>
            <div className={styles.player_position}>
              <span>RW</span>
            </div>
            <div className={styles.player_nation}>
              <img
                src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg"
                alt="Argentina"
                draggable="false"
              />
            </div>
            <div className={styles.player_club}>
              <img
                src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg"
                alt="Barcelona"
                draggable="false"
              />
            </div>
          </div>
          <div className={styles.player_picture}>
            <img
              src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png"
              alt="Messi"
              draggable="false"
            />
            <div className={styles.player_extra}>
              <span>4*SM</span>
              <span>4*WF</span>
            </div>
          </div>
          </div>
          {/* <!-- Player Card Bottom--> */}
          <div className={styles.player_card_bottom}>
            <div className={styles.player_info}>
              {/* <!-- Player Name--> */}
              <div className={styles.player_name}>
                <span>MESSI</span>
              </div>
              {/* <!-- Player Features--> */}
              <div className={styles.player_features}>
                <div className={styles.player_features_col}>
                  <span>
                    <div className={styles.player_feature_value}>97</div>
                    <div className={styles.player_feature_title}>PAC</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>95</div>
                    <div className={styles.player_featur_title}>SHO</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>94</div>
                    <div className={styles.player_feature_title}>PAS</div>
                  </span>
                </div>
                <div className={styles.player_features_col}>
                  <span>
                    <div className={styles.player_feature_value}>99</div>
                    <div className={styles.player_featur_title}>DRI</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>35</div>
                    <div className={styles.player_feature_title}>DEF</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>68</div>
                    <div className={styles.player_feature_title}>PHY</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
 
export default Card;