import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a CMS or database
const blogPostsData = {
  "building-scalable-apis-with-fastapi": {
    title: "Building Scalable APIs with FastAPI",
    excerpt:
      "Learn how to create high-performance, scalable APIs using FastAPI and best practices for production deployments.",
    date: "May 15, 2025",
    readTime: "8 min read",
    author: "Kale Francis",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    categories: ["Backend", "Python", "API Design"],
    content: `
      <h2>Introduction to FastAPI</h2>
      <p>FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It's designed to be easy to use and learn while being powerful enough for production-ready applications.</p>
      
      <p>In this article, we'll explore how to build scalable APIs with FastAPI and cover best practices for production deployments. We'll look at performance optimization, dependency injection, authentication, documentation, and more.</p>
      
      <h2>Why Choose FastAPI?</h2>
      <p>FastAPI offers several advantages over other Python web frameworks:</p>
      <ul>
        <li><strong>Speed</strong>: FastAPI is one of the fastest Python frameworks available, on par with NodeJS and Go.</li>
        <li><strong>Easy to use</strong>: Based on Python type hints, it's intuitive and easy to learn.</li>
        <li><strong>Automatic documentation</strong>: FastAPI generates interactive API documentation automatically.</li>
        <li><strong>Data validation</strong>: Built-in data validation using Pydantic models.</li>
        <li><strong>Standards-based</strong>: Based on open standards like OpenAPI and JSON Schema.</li>
      </ul>
      
      <h2>Setting Up a FastAPI Project</h2>
      <p>Let's start by setting up a basic FastAPI project with a proper structure for scalability:</p>
      
      <pre><code>
      project_root/
      ├── app/
      │   ├── __init__.py
      │   ├── main.py
      │   ├── api/
      │   │   ├── __init__.py
      │   │   ├── dependencies.py
      │   │   ├── routes/
      │   │   │   ├── __init__.py
      │   │   │   ├── items.py
      │   │   │   └── users.py
      │   ├── core/
      │   │   ├── __init__.py
      │   │   ├── config.py
      │   │   └── security.py
      │   ├── db/
      │   │   ├── __init__.py
      │   │   ├── base.py
      │   │   └── models/
      │   ├── models/
      │   │   ├── __init__.py
      │   │   ├── item.py
      │   │   └── user.py
      │   └── schemas/
      │       ├── __init__.py
      │       ├── item.py
      │       └── user.py
      ├── tests/
      │   ├── __init__.py
      │   ├── conftest.py
      │   └── test_api/
      ├── .env
      ├── .gitignore
      ├── requirements.txt
      └── docker-compose.yml
      </code></pre>
      
      <h2>Implementing API Routes</h2>
      <p>FastAPI uses the concept of "path operations" to define API endpoints. Here's an example of how to implement a RESTful API for a resource:</p>
      
      <pre><code>
      from fastapi import APIRouter, Depends, HTTPException
      from typing import List
      from sqlalchemy.orm import Session
      
      from app.api.dependencies import get_db
      from app.schemas.item import Item, ItemCreate, ItemUpdate
      from app.crud import items
      
      router = APIRouter()
      
      @router.get("/", response_model=List[Item])
      def read_items(
          skip: int = 0, 
          limit: int = 100, 
          db: Session = Depends(get_db)
      ):
          return items.get_items(db, skip=skip, limit=limit)
      
      @router.post("/", response_model=Item)
      def create_item(
          item: ItemCreate, 
          db: Session = Depends(get_db)
      ):
          return items.create_item(db, item=item)
      
      @router.get("/{item_id}", response_model=Item)
      def read_item(
          item_id: int, 
          db: Session = Depends(get_db)
      ):
          db_item = items.get_item(db, item_id=item_id)
          if db_item is None:
              raise HTTPException(status_code=404, detail="Item not found")
          return db_item
      
      @router.put("/{item_id}", response_model=Item)
      def update_item(
          item_id: int, 
          item: ItemUpdate, 
          db: Session = Depends(get_db)
      ):
          db_item = items.get_item(db, item_id=item_id)
          if db_item is None:
              raise HTTPException(status_code=404, detail="Item not found")
          return items.update_item(db, item_id=item_id, item=item)
      
      @router.delete("/{item_id}", response_model=Item)
      def delete_item(
          item_id: int, 
          db: Session = Depends(get_db)
      ):
          db_item = items.get_item(db, item_id=item_id)
          if db_item is None:
              raise HTTPException(status_code=404, detail="Item not found")
          return items.delete_item(db, item_id=item_id)
      </code></pre>
      
      <h2>Authentication and Security</h2>
      <p>For production APIs, security is crucial. FastAPI makes it easy to implement authentication using OAuth2 with JWT tokens:</p>
      
      <pre><code>
      from fastapi import Depends, FastAPI, HTTPException, status
      from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
      from jose import JWTError, jwt
      from passlib.context import CryptContext
      from datetime import datetime, timedelta
      
      # Security configurations
      SECRET_KEY = "your-secret-key"
      ALGORITHM = "HS256"
      ACCESS_TOKEN_EXPIRE_MINUTES = 30
      
      pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
      oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
      
      def verify_password(plain_password, hashed_password):
          return pwd_context.verify(plain_password, hashed_password)
          
      def get_password_hash(password):
          return pwd_context.hash(password)
          
      def create_access_token(data: dict, expires_delta: timedelta = None):
          to_encode = data.copy()
          if expires_delta:
              expire = datetime.utcnow() + expires_delta
          else:
              expire = datetime.utcnow() + timedelta(minutes=15)
          to_encode.update({"exp": expire})
          encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
          return encoded_jwt
      </code></pre>
      
      <h2>Performance Optimization</h2>
      <p>FastAPI is already fast by default, but there are several ways to optimize performance further:</p>
      
      <ol>
        <li><strong>Use async/await</strong>: FastAPI supports asynchronous code, which can significantly improve performance for I/O-bound operations.</li>
        <li><strong>Implement caching</strong>: Use Redis or another caching solution for frequently accessed data.</li>
        <li><strong>Database optimization</strong>: Ensure your database queries are optimized with proper indexing.</li>
        <li><strong>Connection pooling</strong>: Use connection pooling for database connections to reduce overhead.</li>
        <li><strong>Pagination</strong>: Always implement pagination for endpoints that return multiple items.</li>
      </ol>
      
      <h2>Deployment Strategies</h2>
      <p>When deploying FastAPI applications to production, consider the following strategies:</p>
      
      <ul>
        <li><strong>Docker containers</strong>: Package your application in Docker containers for consistent deployment across environments.</li>
        <li><strong>Load balancing</strong>: Use a load balancer like Nginx to distribute traffic across multiple instances.</li>
        <li><strong>Kubernetes</strong>: For more complex deployments, consider using Kubernetes for orchestration.</li>
        <li><strong>CI/CD pipelines</strong>: Implement continuous integration and deployment pipelines for automated testing and deployment.</li>
      </ul>
      
      <h2>Monitoring and Logging</h2>
      <p>Proper monitoring and logging are essential for production APIs:</p>
      
      <ul>
        <li><strong>Structured logging</strong>: Use a structured logging format (JSON) for easier parsing and analysis.</li>
        <li><strong>Metrics collection</strong>: Collect metrics like request count, response time, and error rates.</li>
        <li><strong>Distributed tracing</strong>: Implement distributed tracing for complex microservice architectures.</li>
        <li><strong>Alerting</strong>: Set up alerts for critical errors and performance issues.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>FastAPI provides an excellent foundation for building scalable, high-performance APIs. By following the best practices outlined in this article, you can create robust APIs that are ready for production use.</p>
      
      <p>Remember that scalability isn't just about handling more requests—it's also about maintainability, reliability, and adaptability. A well-structured FastAPI application with proper authentication, documentation, and testing will serve you well as your project grows.</p>
    `,
  },
  "integrating-openai-apis-in-production": {
    title: "Integrating OpenAI APIs in Production Applications",
    excerpt:
      "A comprehensive guide to effectively integrating OpenAI's APIs into production applications with proper error handling and optimization.",
    date: "April 28, 2025",
    readTime: "12 min read",
    author: "Kale Francis",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    categories: ["AI/ML", "API Integration", "Production"],
    content: `
      <h2>Introduction</h2>
      <p>OpenAI's APIs provide powerful AI capabilities that can enhance applications with features like natural language processing, content generation, and more. However, integrating these APIs into production applications requires careful planning and implementation to ensure reliability, cost-effectiveness, and optimal performance.</p>
      
      <p>In this article, we'll explore best practices for integrating OpenAI APIs into production applications, covering topics such as error handling, rate limiting, caching, cost optimization, and more.</p>
      
      <h2>Understanding OpenAI API Basics</h2>
      <p>Before diving into production integration, it's important to understand the basics of OpenAI's API offerings:</p>
      
      <ul>
        <li><strong>GPT Models</strong>: Text generation models like GPT-4 and GPT-3.5-Turbo</li>
        <li><strong>Embeddings</strong>: Vector representations of text for semantic search and similarity</li>
        <li><strong>DALL-E</strong>: Image generation from text descriptions</li>
        <li><strong>Whisper</strong>: Speech-to-text transcription and translation</li>
        <li><strong>Moderation</strong>: Content moderation for detecting harmful content</li>
      </ul>
      
      <h2>Setting Up a Robust Client</h2>
      <p>The foundation of a reliable OpenAI integration is a robust API client. Here's an example of setting up a client with proper error handling and retries:</p>
      
      <pre><code>
      import openai
      import time
      import logging
      from tenacity import retry, stop_after_attempt, wait_random_exponential
      
      # Configure logging
      logging.basicConfig(level=logging.INFO)
      logger = logging.getLogger(__name__)
      
      # Configure OpenAI client
      openai.api_key = "your-api-key"
      
      @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6))
      def chat_completion_with_retry(**kwargs):
          try:
              return openai.ChatCompletion.create(**kwargs)
          except openai.error.RateLimitError:
              logger.warning("Rate limit exceeded, retrying after exponential backoff")
              raise
          except openai.error.APIError as e:
              logger.error(f"OpenAI API error: {e}")
              raise
          except openai.error.Timeout:
              logger.warning("OpenAI API request timed out, retrying")
              raise
          except openai.error.ServiceUnavailableError:
              logger.warning("OpenAI service unavailable, retrying")
              raise
          except Exception as e:
              logger.error(f"Unexpected error: {e}")
              raise
      </code></pre>
      
      <h2>Implementing Effective Caching</h2>
      <p>Caching responses can significantly reduce API costs and improve response times. Here's how to implement a simple cache for OpenAI API calls:</p>
      
      <pre><code>
      import hashlib
      import json
      import redis
      
      # Initialize Redis client
      redis_client = redis.Redis(host='localhost', port=6379, db=0)
      
      def get_cache_key(model, messages, temperature):
          # Create a deterministic cache key from request parameters
          request_data = {
              "model": model,
              "messages": messages,
              "temperature": temperature
          }
          request_str = json.dumps(request_data, sort_keys=True)
          return hashlib.md5(request_str.encode()).hexdigest()
      
      def get_cached_completion(model, messages, temperature=0.7):
          cache_key = get_cache_key(model, messages, temperature)
          cached_response = redis_client.get(cache_key)
          
          if cached_response:
              logger.info("Cache hit")
              return json.loads(cached_response)
          
          logger.info("Cache miss")
          response = chat_completion_with_retry(
              model=model,
              messages=messages,
              temperature=temperature
          )
          
          # Cache the response for 24 hours
          redis_client.setex(
              cache_key,
              86400,  # 24 hours in seconds
              json.dumps(response)
          )
          
          return response
      </code></pre>
      
      <h2>Managing Costs and Rate Limits</h2>
      <p>OpenAI APIs are priced based on usage, so it's important to implement strategies to manage costs:</p>
      
      <ol>
        <li><strong>Token counting</strong>: Estimate token usage before making API calls to prevent unexpected costs.</li>
        <li><strong>Request batching</strong>: Batch multiple requests together when possible.</li>
        <li><strong>Rate limiting</strong>: Implement client-side rate limiting to stay within API limits.</li>
        <li><strong>Usage monitoring</strong>: Track API usage to identify optimization opportunities.</li>
      </ol>
      
      <pre><code>
      import tiktoken
      
      def num_tokens_from_messages(messages, model="gpt-3.5-turbo-0613"):
          """Return the number of tokens used by a list of messages."""
          try:
              encoding = tiktoken.encoding_for_model(model)
          except KeyError:
              encoding = tiktoken.get_encoding("cl100k_base")
          
          num_tokens = 0
          for message in messages:
              num_tokens += 4  # every message follows {role/name}\n{content}\n
              for key, value in message.items():
                  num_tokens += len(encoding.encode(value))
                  if key == "name":
                      num_tokens += -1  # role is always required and always 1 token
          num_tokens += 2  # every response is primed with assistant
          return num_tokens
      
      def estimate_cost(messages, model="gpt-3.5-turbo"):
          tokens = num_tokens_from_messages(messages, model)
          # Cost rates as of 2023 - update as needed
          rates = {
              "gpt-3.5-turbo": 0.002 / 1000,  # $0.002 per 1K tokens
              "gpt-4": 0.06 / 1000,  # $0.06 per 1K tokens
          }
          return tokens * rates.get(model, 0.002 / 1000)
      </code></pre>
      
      <h2>Implementing Fallbacks and Graceful Degradation</h2>
      <p>In production systems, it's important to handle API failures gracefully:</p>
      
      <pre><code>
      def get_completion_with_fallback(messages, primary_model="gpt-4", fallback_model="gpt-3.5-turbo"):
          try:
              return chat_completion_with_retry(
                  model=primary_model,
                  messages=messages,
                  temperature=0.7
              )
          except Exception as e:
              logger.warning(f"Primary model failed: {e}. Falling back to {fallback_model}")
              try:
                  return chat_completion_with_retry(
                      model=fallback_model,
                      messages=messages,
                      temperature=0.7
                  )
              except Exception as fallback_error:
                  logger.error(f"Fallback model also failed: {fallback_error}")
                  # Return a predefined response or raise an error
                  return {"choices": [{"message": {"content": "I'm sorry, I'm unable to process your request right now."}}]}
      </code></pre>
      
      <h2>Monitoring and Observability</h2>
      <p>Proper monitoring is essential for production applications:</p>
      
      <ul>
        <li><strong>Request/response logging</strong>: Log API requests and responses for debugging.</li>
        <li><strong>Performance metrics</strong>: Track response times and token usage.</li>
        <li><strong>Error tracking</strong>: Monitor and alert on API errors.</li>
        <li><strong>Cost tracking</strong>: Monitor API costs to prevent budget overruns.</li>
      </ul>
      
      <h2>Security Considerations</h2>
      <p>When integrating OpenAI APIs, consider these security best practices:</p>
      
      <ul>
        <li><strong>API key management</strong>: Store API keys securely using environment variables or a secrets manager.</li>
        <li><strong>Input validation</strong>: Validate and sanitize user inputs before sending to the API.</li>
        <li><strong>Content filtering</strong>: Implement content moderation to prevent harmful outputs.</li>
        <li><strong>Data privacy</strong>: Be mindful of sending sensitive data to external APIs.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Integrating OpenAI APIs into production applications requires careful planning and implementation. By following the best practices outlined in this article, you can create robust, cost-effective, and reliable AI-powered features for your applications.</p>
      
      <p>Remember that the AI landscape is rapidly evolving, so stay updated with the latest changes to OpenAI's APIs and pricing models to ensure your integration remains optimal over time.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = params.id
  const post = blogPostsData[postId as keyof typeof blogPostsData]

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <Badge key={index} className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100">
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{post.title}</h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{post.author}</p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" title="Share">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" title="Bookmark">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800 prose-pre:text-sm">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
