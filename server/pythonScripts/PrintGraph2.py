#!/usr/bin/env python
# coding: utf-8

# In[37]:


import networkx as nx
from networkx.readwrite import json_graph
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import json
get_ipython().run_line_magic('matplotlib', 'inline')


# In[ ]:





# In[7]:


GraphType = nx.Graph()
with open('graph.json') as f:
    data = json.load(f)
G = json_graph.node_link_graph(data)
#G = nx.read_edgelist(
#    fileName,
#    create_using = GraphType,
#    nodetype=str,
#    data=(('weight',int),)
#)


# In[8]:


json_graph.node_link_data(G)


# In[9]:


f = plt.figure()
pos = nx.drawing.layout.spring_layout(G)
nx.draw(G,pos=pos,ax=f.add_subplot(111),with_labels = True)
nx.draw_networkx_edge_labels(G,pos=pos,edge_labels={E: nx.get_edge_attributes(G,'weight')[E] for E in G.edges()})
f.savefig('graph.png')


# In[53]:


fileName = "/Users/WindhorstJanelle/source/repos/TheOtherAlgorithm/TheOtherAlgorithm/graph.txt"

Graphtype = nx.Graph()

G = nx.read_edgelist(
    fileName, 
    create_using = Graphtype,
    nodetype = int,
    data =(('weight',int),)
)

f = plt.figure()
pos = nx.drawing.layout.spring_layout(G)
nx.draw(G,pos=pos,ax=f.add_subplot(111),with_labels = True)
nx.draw_networkx_edge_labels(G,pos=pos,edge_labels={E: nx.get_edge_attributes(G,'weight')[E] for E in G.edges()})


# In[52]:


fileName = "/Users/WindhorstJanelle/source/repos/TheOtherAlgorithm/TheOtherAlgorithm/graph1.txt"

Graphtype = nx.Graph()

G = nx.read_edgelist(
    fileName, 
    create_using = Graphtype,
    nodetype = int,
    data =(('weight',int),)
)

f = plt.figure()
pos = nx.drawing.layout.spring_layout(G)
nx.draw(G,pos=pos,ax=f.add_subplot(111),with_labels = True)
nx.draw_networkx_edge_labels(G,pos=pos,edge_labels={E: nx.get_edge_attributes(G,'weight')[E] for E in G.edges()})


# In[56]:


fileName = "/Users/WindhorstJanelle/source/repos/Christofides/Christofides/graph.txt"

Graphtype = nx.Graph()

G = nx.read_edgelist(
    fileName, 
    create_using = Graphtype,
    nodetype = int,
    data =(('weight',int),)
)

f = plt.figure()
pos = nx.drawing.layout.spring_layout(G)
nx.draw(G,pos=pos,ax=f.add_subplot(111),with_labels = True)
nx.draw_networkx_edge_labels(G,pos=pos,edge_labels={E: nx.get_edge_attributes(G,'weight')[E] for E in G.edges()})


# In[ ]:




