  <div class="card-body-enterprise">
              <!-- NestJS Architecture & Interactive Demo Section -->
              <div class="gaming-demo-container">
              <div class="demo-header">
                <div class="demo-title">
                <span class="game-icon">⚽</span>
                <h3 class="project-title gradient-text">FootSport Gaming Platform</h3>
                <div class="live-badge">
                  <span class="live-dot"></span>
                  <span class="live-text">NESTJS POWERED</span>
                </div>
                </div>
                <div class="project-subtitle">NestJS Microservices • WebSocket Gateway • Prisma ORM</div>
              </div>

              <!-- NestJS Architecture Overview -->
              <div class="nestjs-architecture-panel">
                <div class="architecture-header">

                  <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" style="width: 20px; height: 20px;" />
                <span class="arch-title">NESTJS</span>

                </div>

              <!-- Interactive Gaming Interface with NestJS Code -->
              <div class="gaming-interface">
                <!-- Pack Opening with Code Example -->
                <div class="pack-opening-section">
                <div class="section-header">
                  <span class="section-icon"></span>
                  <span class="section-title">PACK OPENING SYSTEM</span>
                  <div class="websocket-indicator">
                  <span class="socket-pulse"></span>
                  <span class="socket-text">WebSocket Connected</span>
                  </div>
                </div>

                <!-- NestJS Service Code Preview -->
                <div class="code-preview-mini">
                  <div class="code-header-mini">
                  <span class="file-name">cards.service.ts</span>
                  <span class="framework-badge">NestJS</span>
                  </div>
                  <pre class="code-snippet-mini">
      <span class="code-decorator">@Injectable</span>()
      <span class="code-keyword">export class</span> <span class="code-class">CardsService</span> {
        <span class="code-decorator">@InjectRepository</span>(Card)
        <span class="code-keyword">private</span> cardRepo: Repository&lt;Card&gt;;

        <span class="code-keyword">async</span> <span class="code-function">openPack</span>(): Promise&lt;Card[]&gt; {
          <span class="code-keyword">const</span> rarity = <span class="code-keyword">this</span>.<span class="code-function">calculateRarity</span>();
          <span class="code-keyword">return</span> <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-function">generateCards</span>(rarity);
        }
      }
            </div>
                <div class="pack-simulator">
                  <div class="pack-container">
                  <div class="card-pack" id="cardPack">
                    <div class="pack-glow"></div>
                    <div class="pack-face">
                    <div class="pack-logo">⚽</div>
                    <div class="pack-text">FootSport</div>
                    <div class="pack-rarity">LEGENDARY</div>
                    </div>
                  </div>
                  <button class="open-pack-btn" onclick="openPack()">
                    <span class="btn-glow"></span>
                    <span class="btn-text">OPEN PACK</span>
                  </button>
                  </div>

                  <div class="cards-revealed" id="cardsRevealed">
                  <!-- Cards will be dynamically inserted here -->
                  </div>
                </div>
                </div></pre>

                <!-- Live Match Engine -->
                <div class="match-engine-section">
                <div class="section-header">
                  <span class="section-icon">⚔️</span>
                  <span class="section-title">5v5 MATCH ENGINE</span>
                  <div class="websocket-indicator">
                  <span class="socket-pulse"></span>
                  <span class="socket-text">WebSocket Connected</span>
                  </div>
                </div>

                <div class="match-simulator">
                  <div class="match-field">
                  <div class="team team-left">
                    <div class="team-name">Team Alpha</div>
                    <div class="team-score" id="teamAScore">0</div>
                    <div class="team-formation">
                    <div class="player-dot" data-position="GK"></div>
                    <div class="player-dot" data-position="DEF"></div>
                    <div class="player-dot" data-position="DEF"></div>
                    <div class="player-dot" data-position="MID"></div>
                    <div class="player-dot" data-position="ATT"></div>
                    </div>
                  </div>

                  <div class="match-center">
                    <div class="match-timer" id="matchTimer">00:00</div>
                    <div class="ball" id="matchBall">⚽</div>
                    <div class="match-events" id="matchEvents">
                    <div class="event">Match starting...</div>
                    </div>
                  </div>

                  <div class="team team-right">
                    <div class="team-name">Team Beta</div>
                    <div class="team-score" id="teamBScore">0</div>
                    <div class="team-formation">
                    <div class="player-dot" data-position="ATT"></div>
                    <div class="player-dot" data-position="MID"></div>
                    <div class="player-dot" data-position="DEF"></div>
                    <div class="player-dot" data-position="DEF"></div>
                    <div class="player-dot" data-position="GK"></div>
                    </div>
                  </div>
                  </div>

                  <div class="match-controls">
                  <button class="match-btn" onclick="startMatch()">
                    <span class="btn-icon">▶️</span>
                    <span class="btn-text">START MATCH</span>
                  </button>
                  <button class="match-btn secondary" onclick="simulateEvent()">
                    <span class="btn-icon">⚡</span>
                    <span class="btn-text">SIMULATE EVENT</span>
                  </button>
                  </div>

                   <div class="service-module gaming-module my-5 mx-5">
                      <div class="module-header mb-3">
                        <span class="module-icon"></span>
                        <span class="module-name">PVP module</span>
                        <span class="module-status online">ONLINE</span>
                      </div>
                      <div class="module-endpoints">
                        <div class="endpoint">GET /cards/packs</div>
                        <div class="endpoint">POST /matches/create</div>
                        <div class="endpoint developing">
                          WS /match-events
                          <span class="status-indicator developing">
                          <span class="status-dot"></span>
                          IN DEVELOPMENT
                          </span>
                        </div>
                      </div>
                </div>
                </div>
                </div>
              </div>

---

              <!-- Code Showcase with Syntax Highlighting -->
              <div class="code-showcase-container">
                <div class="code-tabs">
                <button class="code-tab active" data-tab="websocket">WebSocket Gateway</button>
                <button class="code-tab" data-tab="service">Gaming Service</button>
                <button class="code-tab" data-tab="dto">Match DTOs</button>
                </div>

                <div class="code-content">
                <div class="code-panel active" id="websocket-code">
                  <div class="code-header">
                  <div class="code-file">match.gateway.ts</div>
                  <div class="code-language">TypeScript</div>
                  <div class="code-status">
                    <span class="status-dot"></span>
                    <span class="status-text">Live Demo</span>
                  </div>
                  </div>
                  <pre class="code-block">
      <span class="code-decorator">@WebSocketGateway</span>({
        <span class="code-property">cors</span>: <span class="code-boolean">true</span>,
        <span class="code-property">namespace</span>: <span class="code-string">'/match'</span>
      })
      <span class="code-keyword">export class</span> <span class="code-class">MatchGateway</span> <span class="code-keyword">implements</span> OnGatewayConnection {

        <span class="code-decorator">@SubscribeMessage</span>(<span class="code-string">'joinMatch'</span>)
        <span class="code-keyword">async</span> <span class="code-function">handleJoinMatch</span>(
        <span class="code-param">@ConnectedSocket() client: Socket</span>,
        <span class="code-param">@MessageBody() data: JoinMatchDto</span>
        ) {
        <span class="code-keyword">const</span> { matchId, playerId } = data;

        <span class="code-comment">// Join match room</span>
        <span class="code-property">client</span>.<span class="code-function">join</span>(`match_${matchId}`);

        <span class="code-comment">// Get real-time match data</span>
        <span class="code-keyword">const</span> match = <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-property">matchService</span>.<span class="code-function">getMatchById</span>(matchId);

        <span class="code-comment">// Emit to all players in match</span>
        <span class="code-keyword">this</span>.<span class="code-property">server</span>
          .<span class="code-function">to</span>(`match_${matchId}`)
          .<span class="code-function">emit</span>(<span class="code-string">'playerJoined'</span>, {
          <span class="code-property">playerId</span>,
          <span class="code-property">matchState</span>: match.<span class="code-property">currentState</span>,
          <span class="code-property">timestamp</span>: <span class="code-keyword">new</span> <span class="code-class">Date</span>()
          });
        }

        <span class="code-decorator">@SubscribeMessage</span>(<span class="code-string">'playCard'</span>)
        <span class="code-keyword">async</span> <span class="code-function">handlePlayCard</span>(client: Socket, cardData: PlayCardDto) {
        <span class="code-comment">// Process card play in real-time</span>
        <span class="code-keyword">const</span> result = <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-property">gameEngine</span>.<span class="code-function">processCardPlay</span>(cardData);

        <span class="code-comment">// Broadcast match update</span>
        <span class="code-keyword">this</span>.<span class="code-property">server</span>.<span class="code-function">emit</span>(<span class="code-string">'matchUpdate'</span>, result);
        }
      }</pre>
                            </div>

                <div class="code-panel" id="service-code">
                  <div class="code-header">
                  <div class="code-file">gaming.service.ts</div>
                  <div class="code-language">TypeScript</div>
                  </div>
                  <pre class="code-block">
      <span class="code-decorator">@Injectable</span>()
      <span class="code-keyword">export class</span> <span class="code-class">GamingService</span> {
        <span class="code-keyword">constructor</span>(
        <span class="code-decorator">@InjectRepository</span>(Match)
        <span class="code-keyword">private</span> matchRepo: Repository&lt;Match&gt;,
        <span class="code-keyword">private</span> cardService: CardService
        ) {}

        <span class="code-keyword">async</span> <span class="code-function">openCardPack</span>(playerId: <span class="code-type">string</span>): Promise&lt;Card[]&gt; {
        <span class="code-comment">// Generate random cards based on rarity</span>
        <span class="code-keyword">const</span> rarityWeights = {
          <span class="code-property">common</span>: <span class="code-number">60</span>,
          <span class="code-property">rare</span>: <span class="code-number">25</span>,
          <span class="code-property">epic</span>: <span class="code-number">12</span>,
          <span class="code-property">legendary</span>: <span class="code-number">3</span>
        };

        <span class="code-keyword">const</span> cards = <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-function">generateRandomCards</span>(<span class="code-number">5</span>, rarityWeights);

        <span class="code-comment">// Save to player collection</span>
        <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-property">cardService</span>.<span class="code-function">addToCollection</span>(playerId, cards);

        <span class="code-keyword">return</span> cards;
        }

        <span class="code-keyword">async</span> <span class="code-function">simulateMatch</span>(teamA: Team, teamB: Team): Promise&lt;MatchResult&gt; {
        <span class="code-keyword">const</span> matchEngine = <span class="code-keyword">new</span> <span class="code-class">MatchEngine</span>(teamA, teamB);

        <span class="code-keyword">return</span> <span class="code-keyword">await</span> matchEngine.<span class="code-function">simulate</span>();
        }
      }</pre>
                </div>

                <div class="code-panel" id="dto-code">
                  <div class="code-header">
                  <div class="code-file">match.dto.ts</div>
                  <div class="code-language">TypeScript</div>
                  </div>
                  <pre class="code-block">
      <span class="code-keyword">export class</span> <span class="code-class">JoinMatchDto</span> {
        <span class="code-decorator">@IsString</span>()
        <span class="code-decorator">@IsNotEmpty</span>()
        <span class="code-property">matchId</span>: <span class="code-type">string</span>;

        <span class="code-decorator">@IsString</span>()
        <span class="code-decorator">@IsNotEmpty</span>()
        <span class="code-property">playerId</span>: <span class="code-type">string</span>;
      }

      <span class="code-keyword">export class</span> <span class="code-class">PlayCardDto</span> {
        <span class="code-decorator">@IsString</span>()
        <span class="code-property">cardId</span>: <span class="code-type">string</span>;

        <span class="code-decorator">@IsString</span>()
        <span class="code-property">playerId</span>: <span class="code-type">string</span>;

        <span class="code-decorator">@IsEnum</span>(Position)
        <span class="code-property">position</span>: Position;
      }

      <span class="code-keyword">export interface</span> <span class="code-class">MatchState</span> {
        <span class="code-property">id</span>: <span class="code-type">string</span>;
        <span class="code-property">players</span>: Player[];
        <span class="code-property">currentRound</span>: <span class="code-type">number</span>;
        <span class="code-property">score</span>: { teamA: <span class="code-type">number</span>; teamB: <span class="code-type">number</span> };
        <span class="code-property">status</span>: MatchStatus;
      }</pre>
                </div>
                </div>
              </div>

            <div class="card-footer-enterprise enhanced">
              <div class="footer-metrics">
              <div class="metric-item">
                <span class="metric-label">WebSocket Latency</span>
                <span class="metric-value realtime" id="wsLatency">~1ms</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Active Players</span>
                <span class="metric-value" id="activePlayers">1,247</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Cards Opened Today</span>
                <span class="metric-value" id="cardsOpened">15,432</span>
              </div>
              </div>

              <div class="action-buttons enhanced">
              <a href="https://github.com/nicolasromeroo/foot-sport" target="_blank" class="btn-action primary enhanced">
                <span class="btn-glow"></span>
                <span class="btn-icon">💻</span>
                <span class="btn-text">
                <span class="btn-label">VIEW SOURCE</span>
                <span class="btn-sublabel">GitHub Repository</span>
                </span>
              </a>

              <button class="btn-action secondary enhanced" onclick="toggleLiveDemo()">
                <span class="btn-glow"></span>
                <span class="btn-icon">🎮</span>
                <span class="btn-text">
                <span class="btn-label">LIVE DEMO</span>
                <span class="btn-sublabel">Interactive Gaming</span>
                </span>
              </button>

              <button class="btn-action tertiary enhanced" onclick="showArchitecture()">
                <span class="btn-glow"></span>
                <span class="btn-icon">🏗️</span>
                <span class="btn-text">
                <span class="btn-label">ARCHITECTURE</span>
                <span class="btn-sublabel">System Design</span>
                </span>
              </button>
              </div>
            </div>
            </div>
                        <!-- Code Showcase with Syntax Highlighting -->
                        <div class="code-showcase-container">
                          <div class="code-tabs">
                            <button class="code-tab active" data-tab="websocket">WebSocket Gateway</button>
                            <button class="code-tab" data-tab="service">Gaming Service</button>
                            <button class="code-tab" data-tab="dto">Match DTOs</button>
                          </div>

                          <div class="code-content">
                            <div class="code-panel active" id="websocket-code">
                              <div class="code-header">
                                <div class="code-file">match.gateway.ts</div>
                                <div class="code-language">TypeScript</div>
                                <div class="code-status">
                                  <span class="status-dot"></span>
                                  <span class="status-text">Live Demo</span>
                                </div>
                              </div>
                              <pre class="code-block">
            <span class="code-decorator">@WebSocketGateway</span>({
              <span class="code-property">cors</span>: <span class="code-boolean">true</span>,
              <span class="code-property">namespace</span>: <span class="code-string">'/match'</span>
            })
            <span class="code-keyword">export class</span> <span class="code-class">MatchGateway</span> <span class="code-keyword">implements</span> OnGatewayConnection {

              <span class="code-decorator">@SubscribeMessage</span>(<span class="code-string">'joinMatch'</span>)
              <span class="code-keyword">async</span> <span class="code-function">handleJoinMatch</span>(
                <span class="code-param">@ConnectedSocket() client: Socket</span>,
                <span class="code-param">@MessageBody() data: JoinMatchDto</span>
              ) {
                <span class="code-keyword">const</span> { matchId, playerId } = data;

                <span class="code-comment">// Join match room</span>
                <span class="code-property">client</span>.<span class="code-function">join</span>(`match_${matchId}`);

                <span class="code-comment">// Get real-time match data</span>
                <span class="code-keyword">const</span> match = <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-property">matchService</span>.<span class="code-function">getMatchById</span>(matchId);

                <span class="code-comment">// Emit to all players in match</span>
                <span class="code-keyword">this</span>.<span class="code-property">server</span>
                  .<span class="code-function">to</span>(`match_${matchId}`)
                  .<span class="code-function">emit</span>(<span class="code-string">'playerJoined'</span>, {
                    <span class="code-property">playerId</span>,
                    <span class="code-property">matchState</span>: match.<span class="code-property">currentState</span>,
                    <span class="code-property">timestamp</span>: <span class="code-keyword">new</span> <span class="code-class">Date</span>()
                  });
              }

              <span class="code-decorator">@SubscribeMessage</span>(<span class="code-string">'playCard'</span>)
              <span class="code-keyword">async</span> <span class="code-function">handlePlayCard</span>(client: Socket, cardData: PlayCardDto) {
                <span class="code-comment">// Process card play in real-time</span>
                <span class="code-keyword">const</span> result = <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-property">gameEngine</span>.<span class="code-function">processCardPlay</span>(cardData);

                <span class="code-comment">// Broadcast match update</span>
                <span class="code-keyword">this</span>.<span class="code-property">server</span>.<span class="code-function">emit</span>(<span class="code-string">'matchUpdate'</span>, result);
              }
            }</pre>
                            </div>

                            <div class="code-panel" id="service-code">
                              <div class="code-header">
                                <div class="code-file">gaming.service.ts</div>
                                <div class="code-language">TypeScript</div>
                              </div>
                              <pre class="code-block">
            <span class="code-decorator">@Injectable</span>()
            <span class="code-keyword">export class</span> <span class="code-class">GamingService</span> {
              <span class="code-keyword">constructor</span>(
                <span class="code-decorator">@InjectRepository</span>(Match)
                <span class="code-keyword">private</span> matchRepo: Repository&lt;Match&gt;,
                <span class="code-keyword">private</span> cardService: CardService
              ) {}

              <span class="code-keyword">async</span> <span class="code-function">openCardPack</span>(playerId: <span class="code-type">string</span>): Promise&lt;Card[]&gt; {
                <span class="code-comment">// Generate random cards based on rarity</span>
                <span class="code-keyword">const</span> rarityWeights = {
                  <span class="code-property">common</span>: <span class="code-number">60</span>,
                  <span class="code-property">rare</span>: <span class="code-number">25</span>,
                  <span class="code-property">epic</span>: <span class="code-number">12</span>,
                  <span class="code-property">legendary</span>: <span class="code-number">3</span>
                };

                <span class="code-keyword">const</span> cards = <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-function">generateRandomCards</span>(<span class="code-number">5</span>, rarityWeights);

                <span class="code-comment">// Save to player collection</span>
                <span class="code-keyword">await</span> <span class="code-keyword">this</span>.<span class="code-property">cardService</span>.<span class="code-function">addToCollection</span>(playerId, cards);

                <span class="code-keyword">return</span> cards;
              }

              <span class="code-keyword">async</span> <span class="code-function">simulateMatch</span>(teamA: Team, teamB: Team): Promise&lt;MatchResult&gt; {
                <span class="code-keyword">const</span> matchEngine = <span class="code-keyword">new</span> <span class="code-class">MatchEngine</span>(teamA, teamB);

                <span class="code-keyword">return</span> <span class="code-keyword">await</span> matchEngine.<span class="code-function">simulate</span>();
              }
            }</pre>
                            </div>

                            <div class="code-panel" id="dto-code">
                              <div class="code-header">
                                <div class="code-file">match.dto.ts</div>
                                <div class="code-language">TypeScript</div>
                              </div>
                              <pre class="code-block">
            <span class="code-keyword">export class</span> <span class="code-class">JoinMatchDto</span> {
              <span class="code-decorator">@IsString</span>()
              <span class="code-decorator">@IsNotEmpty</span>()
              <span class="code-property">matchId</span>: <span class="code-type">string</span>;

              <span class="code-decorator">@IsString</span>()
              <span class="code-decorator">@IsNotEmpty</span>()
              <span class="code-property">playerId</span>: <span class="code-type">string</span>;
            }

            <span class="code-keyword">export class</span> <span class="code-class">PlayCardDto</span> {
              <span class="code-decorator">@IsString</span>()
              <span class="code-property">cardId</span>: <span class="code-type">string</span>;

              <span class="code-decorator">@IsString</span>()
              <span class="code-property">playerId</span>: <span class="code-type">string</span>;

              <span class="code-decorator">@IsEnum</span>(Position)
              <span class="code-property">position</span>: Position;
            }

            <span class="code-keyword">export interface</span> <span class="code-class">MatchState</span> {
              <span class="code-property">id</span>: <span class="code-type">string</span>;
              <span class="code-property">players</span>: Player[];
              <span class="code-property">currentRound</span>: <span class="code-type">number</span>;
              <span class="code-property">score</span>: { teamA: <span class="code-type">number</span>; teamB: <span class="code-type">number</span> };
              <span class="code-property">status</span>: MatchStatus;
            }</pre>
                            </div>
                          </div>
                        </div>

                        
                        </div>
