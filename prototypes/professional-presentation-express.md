   <!-- Project 1: Social Network API (Express.js) - Compact Enterprise Design -->

          <div class="project-enterprise-card express-system real-time-showcase mx-5 compact-design" data-filter="express">
            <!-- Neon Border Glow Effect -->
            <div class="neon-border-glow"></div>

            <!-- Compact Header with Clear Project Identity -->
            <div class="card-header-enterprise compact-header">
              <div class="project-identity-badge">
                <div class="system-status">
                  <div class="status-indicator running">
                    <div class="status-dot pulsing"></div>
                    <span class="status-text">PRODUCTION</span>
                    <div class="live-indicator">LIVE</div>
                  </div>
                </div>
                <div class="project-title-header">
                  <h4 class="project-name-compact">Social Network API</h4>
                  <div class="framework-badge express">Express.js • JWT • MongoDB</div>
                </div>
              </div>

              <!-- Tech Stack Icons - Compact -->
              <div class="tech-stack-visual compact">
                <div class="stack-layer" data-tech="Node.js">
                  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js" />
                </div>
                <div class="stack-layer" data-tech="Express">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" />
                </div>
                <div class="stack-layer" data-tech="MongoDB">
                  <img src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB" />
                </div>
                <div class="stack-layer" data-tech="JWT">
                  <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" />
                </div>
              </div>
            </div>

            <!-- Compact Body with Focused Content -->
            <div class="card-body-enterprise compact-body">
              <!-- Project Description - Concise -->
              <div class="project-description-compact">
                <p class="description-text">
                  <span class="highlight">Full-featured social network API</span> with secure authentication,
                  content filtering, and layered architecture. Includes user management, posts, comments,
                  and <span class="highlight">real-time interactions</span>.
                </p>
              </div>

              <!-- Key Features Grid - Compact -->
              <div class="features-showcase-compact">
                <div class="feature-item-compact">
                  <span class="feature-icon"></span>
                  <span class="feature-text">JWT + bcrypt Auth</span>
                </div>
                <div class="feature-item-compact">
                  <span class="feature-icon"></span>
                  <span class="feature-text">Content Filtering</span>
                </div>
                <div class="feature-item-compact">
                  <span class="feature-icon"></span>
                  <span class="feature-text">Layered Architecture</span>
                </div>
                <div class="feature-item-compact">
                  <span class="feature-icon"></span>
                  <span class="feature-text">Swagger Docs</span>
                </div>
              </div>

              <!-- Interactive Demo Preview - Compact -->
              <div class="demo-preview-compact">
                <div class="demo-terminal-mini">
                  <div class="terminal-header-mini">
                    <div class="terminal-dots">
                      <span class="dot red"></span>
                      <span class="dot yellow"></span>
                      <span class="dot green"></span>
                    </div>
                    <span class="terminal-title">auth.middleware.js</span>
                  </div>
                  <div class="code-preview-mini">
                    <pre class="code-snippet-compact">
          <span class="code-keyword">const</span> <span class="code-function">authMiddleware</span> = <span class="code-keyword">async</span> (<span class="code-param">req, res, next</span>) => {
            <span class="code-keyword">const</span> token = req.headers.authorization?.<span class="code-function">split</span>(<span class="code-string">' '</span>)[<span class="code-number">1</span>];
            <span class="code-keyword">const</span> decoded = jwt.<span class="code-function">verify</span>(token, JWT_SECRET);
            req.user = decoded;
            <span class="code-function">next</span>();
          };</pre>
                  </div>
                </div>

                <!-- Live Metrics - Compact -->
                <div class="live-metrics-compact">
                  <div class="metric-compact">
                    <span class="metric-value">25+</span>
                    <span class="metric-label">Endpoints</span>
                  </div>
                  <div class="metric-compact">
                    <span class="metric-value">JWT</span>
                    <span class="metric-label">Secure</span>
                  </div>
                  <div class="metric-compact">
                    <span class="metric-value">Swagger</span>
                    <span class="metric-label">Documented</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons enhanced mt-3">
              <a href="https://github.com/nicolasromeroo/social-network" target="_blank" class="btn-action primary enhanced">
                <span class="btn-glow"></span>
                <span class="btn-icon"></span>
                <span class="btn-text">
                  <span class="btn-label">VIEW SOURCE</span>
                  <span class="btn-sublabel">GitHub Repository</span>
                </span>
              </a>

              <button class="btn-action secondary enhanced" onclick="toggleApiDetails()">
                <span class="btn-glow"></span>
                <span class="btn-icon"></span>
                <span class="btn-text">
                  <span class="btn-label">LIVE DEMO</span>
                  <span class="btn-sublabel">API Features</span>
                </span>
              </button>

              <button class="btn-action tertiary enhanced" onclick="showSwaggerDocs()">
                <div class="metric-console-item">
                <div class="metric-label">architecture</div>
                <div class="metric-value info">Layered MVC</div>
                <div class="metric-status">CLEAN</div>
                </div>

                <!-- <div class="metric-console-item">
                  <div class="metric-label">deployment</div>
                  <div class="metric-value info">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
                         alt="Docker"
                         style="width: 16px; height: 16px; margin-right: 4px; vertical-align: middle;" />
                    Docker Ready
                  </div>
                  <div class="metric-status">✓ CONTAINERIZED</div>
                </div> -->

                <div class="metric-console-item">
                  <div class="metric-label">api_docs</div>
                  <div class="metric-value info">
                    <img src="https://static1.smartbear.co/swagger/media/assets/swagger_fav.png"
                         alt="Swagger"
                         style="width: 16px; height: 16px; margin-right: 4px; vertical-align: middle;" />
                    Swagger UI
                  </div>
                  <div class="metric-status">✓ DOCUMENTED</div>
                </div>
                 <img src="../../img/backend/express/red-social-express-swagger.jpg" class="w-100"
                         alt="Swagger.img" />
                </div>
                </div>

                    <!-- Code Terminal & Screenshot Grid -->
                    <div class="code-screenshot-grid w-100">
                    <!-- Code Terminal -->
                    <div class="code-terminal-enhanced">
                    <div class="code-terminal-header">
                      <div class="terminal-controls">
                      <span class="control-dot red"></span>
                      <span class="control-dot yellow"></span>
                      <span class="control-dot green"></span>
                      </div>
                      <div class="terminal-file">commentsRestrictions.middleware.js</div>
                      <div class="terminal-language">Express.js</div>
                    </div>

                    <div class="code-execution-expanded mt-3">
                      <div class="code-prompt">
                      <span class="prompt-user">dev@api</span>
                      <span class="prompt-separator">:</span>
                      <span class="prompt-path">~/src/middlewares/</span>
                      <span class="prompt-symbol">$</span>
                      <span class="prompt-command">cat commentsRestrictions.middleware.js</span>
                        </div>

                        <pre class="code-output-enhanced">
                  <span class="code-comment">// Middleware para restringir contenido inapropiado</span>
                  <span class="code-keyword">import</span> { Filter } <span class="code-keyword">from</span> <span class="code-string">"bad-words"</span>;
                  <span class="code-keyword">import</span> commentDao <span class="code-keyword">from</span> <span class="code-string">"../dao/comment.dao.js"</span>;

                  <span class="code-keyword">const</span> filter = <span class="code-keyword">new</span> <span class="code-function">Filter</span>();

                  <span class="code-keyword">export const</span> <span class="code-function">commentsRestrictions</span> = <span class="code-keyword">async</span> (<span class="code-param">req, res, next</span>) => {
                    <span class="code-keyword">const</span> { commentId } = <span class="code-property">req.params</span>;
                    <span class="code-keyword">try</span> {
                    <span class="code-keyword">const</span> comment = <span class="code-keyword">await</span> commentDao.<span class="code-function">getCommentById</span>({
                      <span class="code-property">_id</span>: commentId
                    });

                    <span class="code-keyword">if</span> (!comment) {
                      <span class="code-keyword">return</span> <span class="code-property">res.status</span>(<span class="code-number">404</span>)
                      .<span class="code-function">json</span>({ <span class="code-property">message</span>: <span class="code-string">"Comentario inexistente."</span> });
                    }

                    <span class="code-keyword">const</span> cleanedComment = filter.<span class="code-function">clean</span>(comment.text);
                    comment.text = cleanedComment;

                    <span class="code-function">next</span>();
                    } <span class="code-keyword">catch</span> (err) {
                    <span class="code-keyword">return</span> <span class="code-property">res.status</span>(<span class="code-number">500</span>).<span class="code-function">json</span>({
                      <span class="code-property">message</span>: <span class="code-string">"Error al validar palabras."</span>
                    });
                    }
                  };</pre>
            ;</pre>
                      <!-- <div class="execution-status-compact">
                      <span class="status-icon">✅</span>
                      <span class="status-message">Secure Auth System</span>
                      </div> -->
                    </div>
                    </div>


                  </div>
                  </div>

                  <!-- Card Footer with System Status -->
                  <div class="card-footer-enterprise">


                  <div class="action-buttons-professional w-100 mx-5 mb-4">
                    <div class="buttons-grid">
                      <a href="https://github.com/nicolasromeroo/social-network" target="_blank" class="btn-professional primary">
                        <div class="btn-icon-wrapper">
                          <span class="btn-icon">💻</span>
                        </div>
                        <div class="btn-content">
                          <span class="btn-label">VIEW CODE</span>
                          <span class="btn-sublabel">GitHub Repository</span>
                        </div>
                        <div class="btn-glow"></div>
                      </a>

                      <button class="btn-professional secondary" onclick="toggleApiDetails(this)">
                        <div class="btn-icon-wrapper">
                          <span class="btn-icon">🔍</span>
                        </div>
                        <div class="btn-content">
                          <span class="btn-label">LIVE DEMO</span>
                          <span class="btn-sublabel">Interactive Features</span>
                        </div>
                        <div class="btn-glow"></div>
                      </button>
                    </div>

                    <div class="deployment-status-professional">
                      <div class="status-info"></div>
                        <div class="status-indicator">
                          <span class="status-dot"></span>
                          <span class="status-text">Production Ready</span>
                        </div>
                        <div class="tech-stack">
                          <span class="tech-item">Express.js</span>
                          <span class="tech-separator">•</span>
                          <span class="tech-item">MongoDB</span>
                          <span class="tech-separator">•</span>
                          <span class="tech-item">JWT Auth</span>
                          <span class="tech-separator">•</span>
                          <span class="tech-item">Docker</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  </div>
              </div>
            </div>
            </div>
