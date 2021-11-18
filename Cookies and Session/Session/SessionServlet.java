/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.*;
/**
 *
 * @author gowrish
 */
public class SessionServlet extends HttpServlet {
    
    private final Map books = new HashMap();
    public void init()
    {
        books.put("Let us C", "112233");
        books.put("Mastering C++","113322");
        books.put("Introduction to Databases","113311");
        books.put("Network Programming","112244");
        books.put("Java Complete Reference", "116655");
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String booktit = request.getParameter( "booktitle" );
        // Get the user's session object.
        // Create a session (true) if one does not exist.
        HttpSession session = request.getSession( true );
        // add a value for user's choice to session
        session.setAttribute( booktit, books.get( booktit ) );
        response.setContentType( "text/html" );
        PrintWriter out = response.getWriter();
        // send HTML page to client
        // start HTML document
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title> Welcome to Session Handling </title>");            
            out.println("</head>");
            out.println("<body>");
            out.println( "<p>Welcome to Sessions! You selected " + booktit + ".</p>" );
            // display information about the session
            out.println( "<p>Your unique session ID is: " + session.getId() + "<br />" );
            out.println("This " + ( session.isNew() ? "is" : "is not" ) + " a new session<br />" );
            out.println( "The session was created at: " + new Date( session.getCreationTime() ) + "<br />" );
            out.println( "You last accessed the session at: " + new Date( session.getLastAccessedTime() ) + "<br />" );
            out.println( "The maximum inactive interval is: " + session.getMaxInactiveInterval() + " seconds</p>" );
            out.println( "<p><a href = " + "\"SessionSelectLanguage.html\">" +
                    "Click here to add more books</a></p>" );
            out.println( "<p><a href = \"SessionServlet\">" +
                    "Items in Shopping cart</a></p>" );
            out.println( "</body>" );
            // end HTML document
            out.println( "</html>" );
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    // read session attributes and create HTML document containing recommended books
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get the user's session object.
        // Do not create a session (false) if one does not exist.
        HttpSession session = request.getSession( false );
        // get names of session object's values
        Enumeration valueNames;
        
        if ( session != null )
            valueNames = session.getAttributeNames();
        else
            valueNames = null;
        
        response.setContentType( "text/html" );
        PrintWriter out = response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title> Welcome to Session Handling </title>");            
            out.println("</head>");
            out.println("<body>");
            if ( valueNames != null && valueNames.hasMoreElements() ) 
            {
                out.println( "<h1>Shopping Cart</h1>" );
                out.println( "<p>" );
    
                String name, value;
                // get value for each name in valueNames
                while ( valueNames.hasMoreElements() ) 
                {
                    name = valueNames.nextElement().toString();
                    value = session.getAttribute( name ).toString();
                    out.println( name + " ------- " + value + "<br />" );
                }
                out.println( "</p>" );
            }
            else 
            {
                out.println( "<h1>No Items in the Shopping cart</h1>" );
                out.println( "<p>You did not select a book.</p>" );
            }
            out.println( "</body>" );
            out.println( "</html>" );
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}